import { useState, useRef, useEffect } from "react";
import { Play, Pause, Music, SkipBack, SkipForward, X } from "lucide-react";
import songs from "../assets/data/songs.js";

export default function MusicPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [currentSongIndex, setCurrentSongIndex] = useState(0);
  const [showPlaylist, setShowPlaylist] = useState(false);
  const audioRef = useRef(null);

  useEffect(() => {
    if (!audioRef.current) return;
    const audio = audioRef.current;
    
    try {
      // Tambahkan error handling untuk fetch
      fetch(songs[currentSongIndex].src)
        .then(response => {
          if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
          }
          return response.blob();
        })
        .then(blob => {
          const blobUrl = URL.createObjectURL(blob);
          audio.src = blobUrl;
          audio.type = "audio/mpeg";
          
          // Tambahkan error handling untuk playback
          const playPromise = isPlaying ? audio.play() : Promise.resolve();
          playPromise.catch((err) => {
            console.error("Playback error:", err);
            setIsPlaying(false);
          });
        })
        .catch(err => {
          console.error("Error loading audio:", err);
          // Tambahkan feedback visual untuk error
          alert(`Gagal memuat lagu: ${songs[currentSongIndex].title}`);
        });

      return () => {
        if (audio.src && audio.src.startsWith('blob:')) {
          URL.revokeObjectURL(audio.src);
        }
      };
    } catch (err) {
      console.error("Error setting up audio:", err);
    }
  }, [currentSongIndex, isPlaying]);

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

  const handleSongSelect = (index) => {
    setCurrentSongIndex(index);
    setIsPlaying(true);
  };

  return (
    <div className=" fixed bottom-[5vh] left-0 right-0 lg:translate-y-[95vh] lg:hidden ">
      {/* Player Controls */}
      <div className=" min-h-26 relative z-20 grid items-center grid-cols-6 gap-2 lg:bg-slate-200 lg:rounded-t-2xl bg-white p-2  pr-4 border-y-1 lg:border-1 border-[#6497b1]">
        <audio 
          ref={audioRef} 
          preload="none"
          playsInline
          controlsList="nodownload noplaybackrate"
          onContextMenu={(e) => e.preventDefault()}
          style={{ display: 'none' }}
        />
        <Music className="text-[#6497b1]" size={20} />
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
          className="p-1 bg-[#6497b1] flex justify-center text-white rounded-full"
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
            className="h-1 bg-[#6497b1]"
            style={{ width: `${(currentTime / duration) * 100}%` }}
          />
        </div>
        <div className="flex justify-between text-xs text-gray-500 mt-1">
          <span>{formatTime(currentTime)}</span>
          <span>/{formatTime(duration)}</span>
        </div>
      </div>

      {/* Show Playlist Button */}
      <div className="relative z-20 text-center bg-white  border-[#6497b1]">
        <button
          onClick={() => setShowPlaylist(!showPlaylist)}
          className="w-1/2 px-4 py-2 text-sm border-b-1  rounded-b-2xl border-x-1  border-[#6497b1] text-gray-600 hover:text-[#6497b1]
            transition-colors hover:bg-gray-50 active:scale-95 transform duration-150"
        >
          {showPlaylist ? "Hide Playlist" : "Show Playlist"}
        </button>
      </div>

      {/* Playlist Panel dengan Transisi */}
      <div 
        className={`relative z-10 bg-white border-b-1 border-[#6497b1] 
          shadow-lg overflow-hidden transition-all duration-300 ease-in-out
          ${showPlaylist 
            ? "max-h-[50vh] opacity-100" 
            : "max-h-0 opacity-0"}`}
      >
        <div className={`p-4 space-y-2 transition-all duration-300
          ${showPlaylist ? "translate-y-0" : "-translate-y-4"}`}>
          {songs.map((song, index) => (
            <button
              key={index}
              onClick={() => {
                handleSongSelect(index);
              }}
              className={`w-full flex items-center p-3 rounded-lg 
                transform transition-all duration-200 hover:scale-[0.99]
                ${currentSongIndex === index 
                  ? "bg-blue-50 text-[#6497b1]" 
                  : "hover:bg-gray-50"}`}
            >
              <div className="flex-1 text-left">
                <p className="font-medium">{song.title}</p>
                <p className="text-sm text-gray-500">{song.artist}</p>
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
