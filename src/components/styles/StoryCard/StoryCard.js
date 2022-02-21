import Avatar from "@mui/material/Avatar";
import plusIconSrc from "../../../assets/plus.png";
import StudioPic from "../../../assets/studio.jpg";
import "./StoryCard.css";

function StoryCard({ type, userName, postImgSrc, profileImgSrc }) {
  function handleError(evt) {
    evt.target.src = StudioPic;
  }

  function generateSrc() {
    if (postImgSrc) return postImgSrc;
    else return StudioPic;
  }

  return (
    <div className="story-card">
      <img
        className={`story-card__img${
          type === "postCard" ? "" : " story-card__img-create-post"
        }`}
        alt="userProfile"
        src={generateSrc()}
        onError={(evt) => handleError(evt)}
      ></img>
      <span
        className={`story-card__text${
          type === "postCard" ? "" : " story-card__text-create-post"
        }`}
      >
        <p>{type === "postCard" ? userName : "Create Story"}</p>
      </span>
      {type === "postCard" ? (
        ""
      ) : (
        <span className="story-card__create-post-btn-container">
          <span className="story-card__create-post-btn">
            <img
              className="story-card__create-post-icon"
              src={plusIconSrc}
              alt="create-story icon"
            ></img>
          </span>
        </span>
      )}
      {type === "postCard" ? (
        <Avatar
          className="story-card__avatar"
          alt="User Name"
          src={profileImgSrc}
        />
      ) : (
        ""
      )}
    </div>
  );
}

export default StoryCard;
