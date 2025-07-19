import { useState, useRef, useEffect } from "react";
import Navbar from "./Components/Navbar";
import CodeEditor from "./Components/CodeEditor";
import Controls from "./Components/Controls";
import Terminal from "./Components/Terminal";
import defaultCodeByLanguage from "./utils/defaultCode";

function App() {
  const [selectedLang, setSelectedLang] = useState("Python");
  const [code, setCode] = useState(defaultCodeByLanguage["Python"]);
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");
  const [isDark, setIsDark] = useState(true);
  const undoStack = useRef([]);
  const redoStack = useRef([]);

  useEffect(() => {
    setCode(defaultCodeByLanguage[selectedLang]);
    undoStack.current = [];
    redoStack.current = [];
  }, [selectedLang]);

  const getExtension = () => {
    switch (selectedLang) {
      case "Python": return "py";
      case "JavaScript": return "js";
      case "C++": return "cpp";
      case "Java": return "java";
      default: return "txt";
    }
  };

  const handleSave = () => {
    const blob = new Blob([code], { type: "text/plain" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.download = `code.${getExtension()}`;
    link.href = url;
    link.click();
  };

  const handleOpen = () => {
    const input = document.createElement("input");
    input.type = "file";
    input.accept = ".py,.js,.cpp,.java";
    input.onchange = (e) => {
      const file = e.target.files[0];
      if (!file) return;
      const reader = new FileReader();
      reader.onload = (evt) => setCode(evt.target.result);
      reader.readAsText(file);
    };
    input.click();
  };

  const handleRun = async () => {
    setOutput("Running...");

    const languageMap = {
      Python: "python",
      "C++": "cpp",
      Java: "java",
      JavaScript: "js",
    };

    const langKey = languageMap[selectedLang];

    if (!langKey) {
      setOutput(`Language "${selectedLang}" is not supported yet.`);
      return;
    }

    try {
      const res = await fetch("https://compilergatewayservice.onrender.com/run", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          language: langKey,
          code,
          input,
        }),
      });

      const data = await res.json();
      setOutput(data.output || `Error:\n${data.error}`);
    } catch (err) {
      setOutput("Failed to connect to backend.");
    }
  };

  const handleUndo = () => {
    if (undoStack.current.length) {
      redoStack.current.push(code);
      setCode(undoStack.current.pop());
    }
  };

  const handleRedo = () => {
    if (redoStack.current.length) {
      undoStack.current.push(code);
      setCode(redoStack.current.pop());
    }
  };

  const handleCodeChange = (newCode) => {
    undoStack.current.push(code);
    setCode(newCode);
  };

  const handleReset = () => {
    undoStack.current.push(code);
    setCode(defaultCodeByLanguage[selectedLang]);
  };

  const toggleTheme = () => setIsDark((prev) => !prev);

  return (
    <div className={`${isDark ? "bg-gray-800 text-white" : "bg-white text-black"} min-h-screen`}>
      <div className="flex bold justify-center bg-gradient-to-r from-blue-700 to-blue-400 text-white p-4 text-2xl">
        Online Compiler
      </div>
      <Navbar
        selectedLang={selectedLang}
        setSelectedLang={setSelectedLang}
        onOpen={handleOpen}
        onSave={handleSave}
        onReset={handleReset}
        onUndo={handleUndo}
        onRedo={handleRedo}
        isDark={isDark}
        toggleTheme={toggleTheme}
        onRun={handleRun}
      />
      <div className="p-4 max-w-5xl mx-auto space-y-4">
        <CodeEditor code={code} setCode={handleCodeChange} isDark={isDark} selectedLang={selectedLang} />
        <Controls input={input} setInput={setInput} />
        <Terminal output={output} />
      </div>
    </div>
  );
}

export default App;
