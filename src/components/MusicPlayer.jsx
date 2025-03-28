import { useState, useRef, useEffect } from "react";
import { Play, Pause, Music, SkipBack, SkipForward } from "lucide-react";
import songs from "../assets/data/songs.js";

export default function MusicPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [currentSongIndex, setCurrentSongIndex] = useState(0);
  const audioRef = useRef(null);

  useEffect(() => {
    if (!audioRef.current) return;
    const audio = audioRef.current;
    audio.src = songs[currentSongIndex].src;
    audio.load();

    if (isPlaying) {
      audio.play().catch((err) => console.log("Autoplay gagal:", err));
    }
  }, [currentSongIndex]);

  useEffect(() => {
    if (!audioRef.current) return;
    const audio = audioRef.current;

    const updateTime = () => setCurrentTime(audio.currentTime);
    const updateDuration = () => setDuration(audio.duration || 0);

    audio.addEventListener("timeupdate", updateTime);
    audio.addEventListener("loadedmetadata", updateDuration);
    audio.addEventListener("ended", nextSong);

    return () => {
      audio.removeEventListener("timeupdate", updateTime);
      audio.removeEventListener("loadedmetadata", updateDuration);
      audio.removeEventListener("ended", nextSong);
    };
  }, []);

  const togglePlayPause = () => {
    if (!audioRef.current) return;
    const audio = audioRef.current;

    if (isPlaying) {
      audio.pause();
    } else {
      audio.play().catch((err) => console.log("Gagal play:", err));
    }
    setIsPlaying(!isPlaying);
  };

  const nextSong = () => {
    setCurrentSongIndex((prev) => (prev + 1) % songs.length);
    setIsPlaying(true);
  };

  const prevSong = () => {
    setCurrentSongIndex((prev) => (prev - 1 + songs.length) % songs.length);
    setIsPlaying(true);
  };

  const formatTime = (time) => {
    if (isNaN(time) || time < 0) return "00:00";
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60)
      .toString()
      .padStart(2, "0");
    return `${minutes}:${seconds}`;
  };

  return (
    <div className="fixed bottom-18 left-0 right-0 ">
      <div className="  grid items-center grid-cols-6 gap-2 bg-white p-2  min-h-10 pr-4 border-y-1 border-blue-500">
        <audio ref={audioRef} /> {/* ✅ Tambahkan elemen audio dalam JSX */}
        <Music className="text-blue-500" size={20} />
        <div className="col-span-2">
          <p className="text-sm font-semibold">
            {songs[currentSongIndex].title}
          </p>
          <p className="text-xs text-gray-500">
            {songs[currentSongIndex].artist}
          </p>
        </div>
        <button
          onClick={prevSong}
          className="text-gray-500 hover:text-blue-500"
        >
          <SkipBack size={20} />
        </button>
        <button
          onClick={togglePlayPause}
          className="p-1 bg-blue-500 text-white rounded-full"
        >
          {isPlaying ? <Pause size={20} /> : <Play size={20} />}
        </button>
        <button
          onClick={nextSong}
          className="text-gray-500 hover:text-blue-500"
        >
          <SkipForward size={20} />
        </button>
        <div className="w-full h-1 bg-gray-200 mt-2 relative col-span-4">
          <div
            className="h-1 bg-blue-500"
            style={{ width: `${(currentTime / duration) * 100}%` }}
          />
        </div>
        <div className="flex justify-between text-xs text-gray-500 mt-1">
          <span>{formatTime(currentTime)}</span>
          <span>/{formatTime(duration)}</span>
        </div>
      </div>
      <div className=" text-center">
        <button>Show Playlist ^</button>
      </div>
    </div>
  );
}
