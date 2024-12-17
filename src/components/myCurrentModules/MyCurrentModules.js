import "./MyCurrentModules.css";
import PreviewModule from "../PreviewModule/PreviewModule";

function MyCurrentModules() {
  return (
    <div className="my-current-modules-parent">
      <div className="home-button">My Current Modules</div>
      <div className="preview-holder">
        <PreviewModule />
      </div>
    </div>
  );
}

export default MyCurrentModules;
