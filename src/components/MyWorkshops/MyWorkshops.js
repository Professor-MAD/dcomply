import "./MyWorkshops.css";
import HeaderSnack from "../SubComponents/HeaderSnack/HeaderSnack.js";

function MyWorkshops() {
  return (
    <div>
      <HeaderSnack isMyModuleOpen={false} isMyWorkshopsOpen={true} />
    </div>
  );
}

export default MyWorkshops;
