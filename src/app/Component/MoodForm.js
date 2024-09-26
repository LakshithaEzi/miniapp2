import { useState } from "react";
import { useMood } from "../Component/MoodContext";

const MoodForm = () => {
  const { addMood } = useMood();
  const [mood, setMood] = useState("");
  const [note, setNote] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (mood) {
      addMood({ mood, note, date: new Date().toLocaleDateString() });
      setMood("");
      setNote("");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <select className="bg-red-400 p-4 rounded-lg  " value={mood} onChange={(e) => setMood(e.target.value)} required>
        <option value="">Select Mood</option>
        <option value="Happy">Happy</option>
        <option value="Sad">Sad</option>
        <option value="Anxious">Anxious</option>
        <option value="Excited">Excited</option>
      </select>
      <textarea
        value={note}
        onChange={(e) => setNote(e.target.value)}
        placeholder="Add a note..."
      />
      <button type="submit">Add Mood</button>
    </form>
  );
};

export default MoodForm;
