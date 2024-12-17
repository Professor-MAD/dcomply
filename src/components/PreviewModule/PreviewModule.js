import "./PreviewModule.css";

function PreviewModule() {
  return (
    <div className="preview-module-container">
      <div className="header">
        <div className="status">Assigned</div>
      </div>
      <div className="preview-icon-holder">
        <img
          className="monkey-reading"
          src="/images/monkey-reading.png"
          alt="monkey-reading"
        />
      </div>
      <div className="title-and-description-container">
        <div className="title">Title</div>
        <div className="description"></div>
      </div>
    </div>
  );
}

export default PreviewModule;
