import { useState } from "react";
import "./PreviewModule.css";
import InfoTag from "./InfoTag";

function PreviewModule({ title, tag }) {
  const [isMonkeyHovered, setIsMonkeyHovered] = useState(false);
  const [isTitleHovered, setIsTitleHovered] = useState(false);
  const [isModuleHovered, setIsModuleHovered] = useState(false);

  return (
    <div
      className="preview-module-container"
      onMouseEnter={() => {
        setIsTitleHovered(true);
        setIsMonkeyHovered(true);
        setIsModuleHovered(true);
      }}
      onMouseLeave={() => {
        setIsTitleHovered(false);
        setIsMonkeyHovered(false);
        setIsModuleHovered(false);
      }}
    >
      {isModuleHovered && (
        <div className="info-tag-holder">
          <InfoTag
            tagTitle={tag.tagTitle}
            tagDescription={tag.tagDescription}
          />
        </div>
      )}

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
        <div className={`title ${isTitleHovered ? "active" : ""}`}>{title}</div>
        <div className="description"></div>
      </div>
    </div>
  );
}

export default PreviewModule;
