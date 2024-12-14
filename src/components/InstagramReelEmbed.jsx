import React, { useState } from 'react';

const InstagramReelEmbed = ({ url }) => {
  const [isPlaying, setIsPlaying] = useState(false);

  const togglePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  return (
    <div className="relative w-full h-96 h-0 pb-[56.25%]">
      <iframe
        title="Instagram Reel"
        className="absolute top-0 left-0 w-full h-full"
        src={url}
        allowFullScreen
        frameBorder="0"
        scrolling="no"
      ></iframe>
      <button
        className="absolute z-10 bottom-4 right-4 bg-white bg-opacity-75 rounded-full p-2 text-sm"
        onClick={togglePlayPause}
      >
        {isPlaying ? 'Pause' : 'Play'}
      </button>
    </div>
  );
};

export default InstagramReelEmbed;
