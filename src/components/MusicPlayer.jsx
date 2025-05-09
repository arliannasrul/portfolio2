import { useState, useRef, useEffect } from "react";
import { Play, Pause, Music, SkipBack, SkipForward } from "lucide-react";
import songs from "../assets/data/songs.js";

export default function MusicPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [currentSongIndex, setCurrentSongIndex] = useState(0);
  const [showPlaylist, setShowPlaylist] = useState(false);

  const audioRef = useRef(null);
  const currentBlobUrl = useRef(null); // Untuk menyimpan dan revoke blob URL sebelumnya

  // Load & set source setiap kali lagu berganti
  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const loadAudio = async () => {
      try {
        const response = await fetch(songs[currentSongIndex].src);
        if (!response.ok)
          throw new Error(`HTTP error! status: ${response.status}`);
        const blob = await response.blob();

        // Revoke blob lama
        if (currentBlobUrl.current) {
          URL.revokeObjectURL(currentBlobUrl.current);
        }

        const blobUrl = URL.createObjectURL(blob);
        currentBlobUrl.current = blobUrl;
        audio.src = blobUrl;

        if (isPlaying) {
          await audio.play();
        }
      } catch (err) {
        console.error("Error loading/playing audio:", err);
        alert(`Gagal memuat lagu: ${songs[currentSongIndex].title}`);
        setIsPlaying(false);
      }
    };

    loadAudio();

    return () => {
      if (currentBlobUrl.current) {
        URL.revokeObjectURL(currentBlobUrl.current);
        currentBlobUrl.current = null;
      }
    };
  }, [currentSongIndex]);

  // Play/pause control
  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    if (isPlaying) {
      audio.play().catch((err) => {
        console.error("Playback error:", err);
        setIsPlaying(false);
      });
    } else {
      audio.pause();
    }
  }, [isPlaying]);

  // Event listeners
  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const updateTime = () => setCurrentTime(audio.currentTime);
    const updateDuration = () => setDuration(audio.duration || 0);
    const handleEnded = () => nextSong();

    audio.addEventListener("timeupdate", updateTime);
    audio.addEventListener("loadedmetadata", updateDuration);
    audio.addEventListener("ended", handleEnded);

    return () => {
      audio.removeEventListener("timeupdate", updateTime);
      audio.removeEventListener("loadedmetadata", updateDuration);
      audio.removeEventListener("ended", handleEnded);
    };
  }, []);

  const togglePlayPause = () => {
    setIsPlaying((prev) => !prev);
  };

  const nextSong = () => {
    setCurrentSongIndex((prev) => (prev + 1) % songs.length);
    setIsPlaying(true);
  };

  const prevSong = () => {
    setCurrentSongIndex((prev) => (prev - 1 + songs.length) % songs.length);
    setIsPlaying(true);
  };

  const handleSongSelect = (index) => {
    setCurrentSongIndex(index);
    setIsPlaying(true);
  };

  const formatTime = (time) => {
    if (isNaN(time)) return "00:00";
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60)
      .toString()
      .padStart(2, "0");
    return `${minutes}:${seconds}`;
  };

  return (
    <div className="fixed bottom-[6vh] left-0 right-0 lg:translate-y-[95vh] lg:hidden ">
      {/* Player Controls */}
      <div className="min-h-24 max-h-24 relative z-20 grid items-center grid-cols-6 gap-2 lg:bg-slate-200 lg:rounded-t-2xl transition-all duration-300  p-2 pr-4 border-y-1 lg:border-1 border-[#6497b1]">
        <audio
          ref={audioRef}
          preload="none"
          playsInline
          controlsList="nodownload noplaybackrate"
          onContextMenu={(e) => e.preventDefault()}
          style={{ display: "none" }}
        />
        <Music className="text-[#6497b1]" size={20} />
        <div className="col-span-2">
          <p className="text-xs font-semibold">
            {songs[currentSongIndex].title}
          </p>
          <p className="text-[10px] text-gray-500 dark:text-gray-300">
            {songs[currentSongIndex].artist}
          </p>
        </div>
        <button
          onClick={prevSong}
          className=" flex justify-center text-gray-500 hover:text-blue-500"
        >
          <SkipBack size={20} />
        </button>
        <button
          onClick={togglePlayPause}
          className="p-1 bg-[#6497b1] flex justify-center text-white rounded-full"
        >
          {isPlaying ? <Pause size={20} /> : <Play size={20} />}
        </button>
        <button
          onClick={nextSong}
          className=" flex justify-center text-gray-500 hover:text-blue-500"
        >
          <SkipForward size={20} />
        </button>

        <div className="w-full h-1 bg-gray-200 mt-2 relative col-span-4">
          <div
            className="h-1 bg-[#6497b1]"
            style={{ width: `${(currentTime / duration) * 100}%` }}
          />
        </div>
        <div className="flex justify-between text-xs text-gray-500 dark:text-gray-300 mt-1 ">
          <span>{formatTime(currentTime)}</span>
          <span>/{formatTime(duration)}</span>
        </div>
      </div>

      {/* Show Playlist Button */}
      <div className="relative z-20 text-center bg-transparent  border-[#6497b1]">
        <button
          onClick={() => setShowPlaylist(!showPlaylist)}
          className="w-3/4 px-4 py-2 text-sm border-b-1 rounded-b-2xl border-x-1 border-[#6497b1] text-gray-600 dark:text-gray-300 hover:text-[#6497b1] transition-all hover:bg-gray-50 dark:hover:bg-slate-800 active:scale-95 transform duration-300"
        >
          {showPlaylist ? "Hide Playlist" : "Show Playlist"}
        </button>
      </div>

      {/* Playlist Panel */}
      <div
        className={`relative z-10 border-b-1 border-[#6497b1] overflow-y-scroll transition-all duration-300 ease-in-out ${
          showPlaylist ? "max-h-[25vh] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div
          className={`p-4 space-y-2 transition-all duration-300 ${
            showPlaylist ? "translate-y-0" : "-translate-y-4"
          }`}
        >
          {songs.map((song, index) => (
            <button
              key={index}
              onClick={() => handleSongSelect(index)}
              className={`w-full flex items-center p-2 rounded-lg transform transition-all duration-200 hover:scale-[0.99] ${
                currentSongIndex === index
                  ? "bg-blue-50 text-[#6497b1]"
                  : "hover:bg-gray-50 dark:hover:bg-gray-800"
              }`}
            >
              <div className="flex-1 text-left">
                <p className="text-sm">{song.title}</p>
                <p className="text-xs text-gray-500 dark:text-gray-300">{song.artist}</p>
              </div>
              {currentSongIndex === index && isPlaying && (
                <div className="w-4 h-4 rounded-full bg-[#6497b1] flex items-center justify-center">
                  <div className="w-2 h-2 bg-white rounded-full animate-pulse" />
                </div>
              )}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
