import LanguageSelector from "./LanguageSelector";
import { FaMoon, FaSun, FaUndo, FaRedo, FaFolderOpen, FaSave, FaSyncAlt } from "react-icons/fa";
import { useState } from "react";

export default function Navbar({
  selectedLang,
  setSelectedLang,
  onOpen,
  onSave,
  onReset,
  onUndo,
  onRedo,
  isDark,
  toggleTheme,
  onRun,
}) {
  return (
    <nav className="flex justify-between items-center px-4 py-3 bg-gray-900 text-white shadow">
      {/* Left Buttons */}
      <div className="flex space-x-4 items-center">
        <button onClick={onOpen} title="Open File">
          <FaFolderOpen />
        </button>
        <button onClick={onSave} title="Save File">
          <FaSave />
        </button>
        <button onClick={onReset} title="Reset Code">
          <FaSyncAlt />
        </button>
        <button onClick={onUndo} title="Undo">
          <FaUndo />
        </button>
        <button onClick={onRedo} title="Redo">
          <FaRedo />
        </button>
      </div>

      {/* Right Controls */}
      <div className="flex space-x-4 items-center">
        <button onClick={toggleTheme} title="Toggle Theme">
          {isDark ? <FaSun /> : <FaMoon />}
        </button>
        <LanguageSelector
          selectedLang={selectedLang}
          setSelectedLang={setSelectedLang}
        />
        <div className="flex justify-end">
        <button
          onClick={onRun}
          className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-md"
        >
          Run Code
        </button>
      </div>
      </div>
    </nav>
  );
}
