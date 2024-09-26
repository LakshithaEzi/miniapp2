import { useMood } from "../Component/MoodContext";

const MoodList = () => {
  const { moods } = useMood();

  return (
    <ul>
      {moods.map((moodEntry, index) => (
        <li key={index}>
          {moodEntry.date}: {moodEntry.mood} - {moodEntry.note}
        </li>
      ))}
    </ul>
  );
};

export default MoodList;
