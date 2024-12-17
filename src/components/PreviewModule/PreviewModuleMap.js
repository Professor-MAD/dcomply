import "./PreviewModule.css";
import PreviewModule from "./PreviewModule";
import previewModuleContent from "./PreviewModuleContent";

function PreviewModuleMap() {
  return (
    <div className="preview-module-map-container">
      {previewModuleContent.map((module, index) => (
        <PreviewModule key={index} title={module.title} />
      ))}
    </div>
  );
}

export default PreviewModuleMap;
