import "./MyCurrentModules.css";
import PreviewModuleMap from "../PreviewModule/PreviewModuleMap";

function MyCurrentModules() {
  return (
    <div className="my-current-modules-parent">
      <div className="preview-holder">
        <PreviewModuleMap />
      </div>
    </div>
  );
}

export default MyCurrentModules;
