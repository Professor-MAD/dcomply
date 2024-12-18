import "./MyCurrentModules.css";
import PreviewModuleMap from "../PreviewModule/PreviewModuleMap";
import HeaderSnack from "../SubComponents/HeaderSnack/HeaderSnack.js";

function MyCurrentModules() {
  return (
    <div className="my-current-modules-parent">
      <HeaderSnack isMyModuleOpen={true} isMyWorkshopsOpen={false} />
      <div className="preview-holder">
        <PreviewModuleMap />
      </div>
    </div>
  );
}

export default MyCurrentModules;
