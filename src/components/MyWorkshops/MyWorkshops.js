import "./MyWorkshops.css";

function MyWorkshops() {
  return (
    <div className="my-workshops-parent">
      <div className="home-button">My Current Workshops</div>
      <div className="preview-holder">
        <div className="no-current-modules">
          <div className="top-div-no-current-modules">
            You do not have any assigned workshops!
          </div>
          <div className="bottom-div-no-current-modules">
            Contact&nbsp;
            <a href="mailto:professormad@proton.me" className="email-link">
              professormad@proton.me
            </a>
            &nbsp;if you feel this is an error.
          </div>
        </div>
      </div>
    </div>
  );
}

export default MyWorkshops;
