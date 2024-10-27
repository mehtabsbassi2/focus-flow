import React, { useState, useRef } from "react"; // Import React and hooks
import "./meditate.css"; // Import styles
import {
  GrResume,
  GrCaretNext,
  GrCaretPrevious,
  GrStop,
  GrPause,
} from "react-icons/gr"; // Import icons

const Meditate = () => {
  const [currentTrackIndex, setCurrentTrackIndex] = useState(0); // Track index state
  const [isPlaying, setIsPlaying] = useState(false); // Playback state
  const audioRef = useRef(null); // Ref for audio object

  // Track list
  const tracks = [
    {
      title: "MI-1 Fallout",
      file: require("../../assets/Fallout.mp3"), // Track file
    },
    {
      title: "Fitness Track",
      file: require("../../assets/Fitness.mp3"), // Track file
    },
    {
      title: "Prison Break",
      file: require("../../assets/Prisonbreak.mp3"), // Track file
    },
    {
      title: "Vikings Intro",
      file: require("../../assets/Vikings.mp3"), // Track file
    },
  ];

  // Function to play the selected track
  const playTrack = (trackIndex) => {
    const trackFile = tracks[trackIndex].file;

    // Stop current audio if playing
    if (audioRef.current) {
      audioRef.current.pause();
    }

    // Create and play the selected audio track
    audioRef.current = new Audio(trackFile);
    audioRef.current.play();
    setIsPlaying(true);
    setCurrentTrackIndex(trackIndex);

    // Listen for when the track ends
    audioRef.current.addEventListener("ended", () => {
      setIsPlaying(false);
      setCurrentTrackIndex(null); // Reset track index
    });
  };

  // Function to pause the track
  const pauseTrack = () => {
    if (audioRef.current) {
      audioRef.current.pause();
      setIsPlaying(false);
    }
  };

  // Function to resume the paused track
  const resumeTrack = () => {
    if (audioRef.current) {
      audioRef.current.play();
      setIsPlaying(true);
    }
  };

  // Function to stop the track
  const stopTrack = () => {
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.currentTime = 0; // Reset to start
      setIsPlaying(false);
    }
  };

  // Function to play the next track
  const nextTrack = () => {
    const nextIndex = (currentTrackIndex + 1) % tracks.length; // Loop to first track
    playTrack(nextIndex);
  };

  // Function to play the previous track
  const previousTrack = () => {
    const prevIndex = (currentTrackIndex - 1 + tracks.length) % tracks.length; // Loop to last track
    playTrack(prevIndex);
  };

  return (
    <div className="meditate-section">
      <h2>Meditate</h2>
      <div className="music-selection">
        <h3>Select a Track</h3>
        {tracks.map((track, index) => (
          <button key={index} onClick={() => playTrack(index)}>
            {track.title} {/* Track button */}
          </button>
        ))}
      </div>
      <div className="music-controls">
        {isPlaying ? ( // Display controls based on playback state
          <div>
            <p>Now Playing: {tracks[currentTrackIndex]?.title}</p>
            <div className="controls">
              <button onClick={pauseTrack}>
                <GrPause size={30} />
              </button>
              <button onClick={nextTrack}>
                <GrCaretNext size={30} />
              </button>
              <button onClick={previousTrack}>
                <GrCaretPrevious size={30} />
              </button>
              <button onClick={stopTrack}>
                <GrStop size={30} />
              </button>
            </div>
          </div>
        ) : (
          currentTrackIndex !== null && ( // Show paused state if a track was playing
            <div>
              <p>Paused: {tracks[currentTrackIndex]?.title}</p>
              <div className="controls">
                <button onClick={resumeTrack}>
                  <GrResume size={30} />
                </button>
                <button onClick={nextTrack}>
                  <GrCaretNext size={30} />
                </button>
                <button onClick={previousTrack}>
                  <GrCaretPrevious size={30} />
                </button>
                <button onClick={stopTrack}>
                  <GrStop size={30} />
                </button>
              </div>
            </div>
          )
        )}
      </div>
    </div>
  );
};

export default Meditate; // Export the component
