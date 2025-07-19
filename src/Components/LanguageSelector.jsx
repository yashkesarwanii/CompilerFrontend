
const languages = ["Python", "JavaScript", "C++", "Java"];

export default function LanguageSelector({ selectedLang, setSelectedLang }) {
  return (
    <select
      className="bg-gray-800 text-white border border-gray-600 px-2 py-1 rounded-md"
      value={selectedLang}
      onChange={(e) => setSelectedLang(e.target.value)}
    >
      {languages.map((lang) => (
        <option key={lang} value={lang}>
          {lang}
        </option>
      ))}
    </select>
  );
}
