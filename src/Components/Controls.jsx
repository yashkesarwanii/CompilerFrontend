export default function Controls({ input, setInput }) {
  return (
    <div className="space-y-2">
      <textarea
        placeholder="Enter input for the program..."
        className="w-full p-2 border text-stone-950 rounded-md text-sm"
        rows={3}
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
    </div>
  );
}
