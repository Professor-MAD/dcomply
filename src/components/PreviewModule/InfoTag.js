import "./InfoTag.css";

function InfoTag({ tagTitle, tagDescription }) {
  return (
    <div className="parent-container">
      <div className="top-div">{tagTitle}</div>
      <div className="bottom-div">{tagDescription}</div>
    </div>
  );
}

export default InfoTag;
