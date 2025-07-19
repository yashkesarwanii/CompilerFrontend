import Editor from "@monaco-editor/react";

export default function CodeEditor({ code, setCode, isDark, selectedLang }) {
  const getLanguageId = () => {
    switch (selectedLang) {
      case "Python": return "python";
      case "JavaScript": return "javascript";
      case "C++": return "cpp";
      case "Java": return "java";
      default: return "plaintext";
    }
  };

  return (
    <div className="h-[400px] border rounded-lg overflow-hidden shadow">
      <Editor
        height="100%"
        theme={isDark ? "vs-dark" : "light"}
        language={getLanguageId()}
        value={code}
        onChange={(value) => setCode(value || "")}
        options={{
          fontSize: 14,
          minimap: { enabled: false },
          wordWrap: "on",
        }}
      />
    </div>
  );
}
