import React from "react";

export const Board = () => {
  return (
    <div>
      <div className="carousel w-full">
        <div id="item1" className="carousel-item w-full">
          <img
            src="https://w.wallha.com/ws/14/vnNu9BfW.png"
            className="w-full"
          />
        </div>
        <div id="item2" className="carousel-item w-full">
          <img
            src="https://images3.alphacoders.com/118/thumb-1920-1187487.jpg"
            className="w-full"
          />
        </div>
        <div id="item3" className="carousel-item w-full">
          <img
            src="https://c4.wallpaperflare.com/wallpaper/249/176/877/exusiai-arknights-texas-arknights-arknights-anime-clouds-hd-wallpaper-preview.jpg"
            className="w-full"
          />
        </div>
      </div>
      <div className="flex w-full justify-center gap-2 py-2">
        <a href="#item1" className="btn-xs btn">
          1
        </a>
        <a href="#item1" className="btn-xs btn">
          2
        </a>
        <a href="#item1" className="btn-xs btn">
          3
        </a>
      </div>
    </div>
  );
};
