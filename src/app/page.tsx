// pages/index.js
"use client"; // This line can be added if the entire page is a client component

import MoodForm from '../app/Component/MoodForm';
import MoodList from '../app/Component/MoodList';
import { MoodProvider } from '../app/Component/MoodContext';

export default function Home() {
  return (
    <MoodProvider>
      <div style={{ padding: '20px' }}>
        <h1>Mood Tracker</h1>
        <MoodForm />
        <h2>Mood History</h2>
        <MoodList />
      </div>
    </MoodProvider>
  );
}

