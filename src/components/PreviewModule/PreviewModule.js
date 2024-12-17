import { useState } from "react";
import "./PreviewModule.css";

function PreviewModule() {
  const [isMonkeyHovered, setIsMonkeyHovered] = useState(false);
  const [isTitleHovered, setIsTitleHovered] = useState(false);
  return (
    <div
      className="preview-module-container"
      onMouseEnter={() => {
        setIsTitleHovered(true);
        setIsMonkeyHovered(true);
      }}
      onMouseLeave={() => {
        setIsTitleHovered(false);
        setIsMonkeyHovered(false);
      }}
    >
      <div className="header">
        <div className="status">Assigned</div>
      </div>
      <div className="preview-icon-holder">
        <img
          className="monkey-reading"
          src={
            isMonkeyHovered
              ? "/images/monkey-reading-dark.png"
              : "/images/monkey-reading.png"
          }
          alt="monkey-reading"
        />
      </div>
      <div className="title-and-description-container">
        <div className={`title ${isTitleHovered ? "active" : ""}`}>Title</div>
        <div className="description"></div>
      </div>
    </div>
  );
}

export default PreviewModule;
