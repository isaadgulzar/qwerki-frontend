import React, { useEffect, useRef, useState } from 'react';

import { playBtn } from "../assets/images" 
import { pauseBtn } from "../assets/icons" 

const CustomVideo = ({id}) => {
  const videoId = id; // Replace with the actual YouTube video ID
  const [player, setPlayer] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [mouseHovered, setMouseHovered] = useState(false);

  const togglePlayPause = () => {
    if (player) {
      if (isPlaying) {
        player.pauseVideo();
      } else {
        player.playVideo();
      }
      setIsPlaying(!isPlaying);
    }
  };

  useEffect(() => {
    const playerInstance = new window.YT.Player('video-player', {
      videoId,
      playerVars: {
        autoplay: 0,
        controls: 0,
        loop: 1,
        modestbranding: 1,
        playsinline: 1,
        rel: 0,
        showinfo: 0,
      },
      events: {
        onReady: (event) => {
          setPlayer(event.target);
        },
      },
    });

    return () => {
      playerInstance.destroy(); // Cleanup the player on component unmount
    };
  }, [videoId]);

  return (
    <div style={{ position: 'relative', width: '100%', height: '100%' }} onMouseOver={() => setMouseHovered(true)}
    onMouseLeave={() => setMouseHovered(false)}>
      <div
        id="video-player"
        
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          zIndex: -1,
        }}
      ></div>
      <button
        onClick={togglePlayPause}
        className='focus:outline-none'
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translateX(-50%) translateY(-50%)',
          zIndex: 1,
          color: 'white',
          border: 'none',
          borderRadius: '4px',
          cursor: 'pointer',
        }}
      >
        {!isPlaying && <img className="play-btn" src={playBtn} alt="" />}
        {(isPlaying && mouseHovered) && <div className="play-btn flex items-center justify-center">
          <img className='h-11 w-11' src={pauseBtn} alt="" />
          </div>}
      </button>
    </div>
  );
};

export default CustomVideo;
