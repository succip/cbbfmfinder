import { useState } from "react";
import songsData from "./data/cbbfmpoc.json";
import "./App.css";
import "./index.css";

type Song = {
  episodeGuest: string;
  episodeNumber: number;
  song: string;
  artist: string;
};

function App() {
  return (
    <div className="p-4">
      <div className="grid grid-cols-3 gap-4">
        {songsData.map((song, index) => (
          <div key={index} className="border p-2 rounded">
            <div className="font-semibold">{song.title}</div>
            <div className="text-sm text-gray-600">{song.artist}</div>
            <div className="text-sm italic">{song.episodeGuest}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
