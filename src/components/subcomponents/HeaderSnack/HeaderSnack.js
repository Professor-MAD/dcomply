import "./HeaderSnack.css";

function HeaderSnack({ isMyModulesOpen, isMyWorkshopsOpen }) {
  return (
    <>
      {isMyModulesOpen && <div className="home-button">My Current Modules</div>}
      {isMyWorkshopsOpen && (
        <div className="home-button">My Current Workshops</div>
      )}
    </>
  );
}

export default HeaderSnack;
