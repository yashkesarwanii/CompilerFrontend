export default function Terminal({ output }) {
  return (
    <div className="bg-black text-green-400 font-mono text-sm p-3 rounded-lg h-40 overflow-y-auto mt-4">
      <pre>{output || "Program output will appear here..."}</pre>
    </div>
  );
}
