import { useEffect, useState } from "react";
import useAuth from "../../../hooks/useAuth";
import useDatabase from "../../../hooks/useDatabase";
import useClickOutside from "../../../hooks/useClickOutside";
import Avatar from "@mui/material/Avatar";
import {
  Link,
  Clear,
  AddAPhoto,
  KeyboardBackspaceRounded,
} from "@mui/icons-material";
import "./CreatePost.css";

function CreatePost() {
  const { user } = useAuth();
  const { savePost } = useDatabase();
  const [isAddingPicture, setAddingPicture] = useState(false);
  const [post, setPost] = useState("");
  const [currentPicture, setCurrentPicture] = useState("");
  const [picture, setPicture] = useState("");
  const { ref: popupRef, isClickOutside } = useClickOutside();

  function toggleAddPicture(val) {
    setAddingPicture(val);
  }

  function submitPost(evt) {
    evt.preventDefault();
    const postData = {
      creator: user.displayName,
      avatar: user.photoURL,
      message: post,
      image: picture ? picture : null,
      likes: [],
      createdAt: Date.now(),
    };

    savePost(postData);
    setPost("");
    setPicture("");
  }

  function submitPicture() {
    setAddingPicture(false);
    setPicture(currentPicture);
    setCurrentPicture("");
  }

  function updateCurrentPicture(val) {
    setCurrentPicture(val);
  }

  function clearPicture() {
    updateCurrentPicture("");
    setPicture("");
    toggleAddPicture(false);
  }

  function handleSubmitPicture(evt) {
    if (evt.code === "Enter") {
      evt.preventDefault();
      submitPicture();
    }
  }

  useEffect(() => {
    if (isClickOutside) {
      toggleAddPicture(false);
    }
  }, [isClickOutside]);

  return (
    <div className="create-post">
      <form className="create-post__form" onSubmit={submitPost}>
        <Avatar className="create-post__avatar" src={user?.photoURL} />
        <div className="create-post__input-container">
          <input
            id="create-post__input"
            className="text-input"
            type="text"
            placeholder={`Write a post, ${user?.displayName?.split(" ")[0]}`}
            value={post}
            onChange={(evt) => setPost(evt.target.value)}
          />
          <span
            className="create-post__picture-link-container"
            onClick={() => toggleAddPicture(true)}
          >
            <AddAPhoto
              id="create-post__picture-link"
              className={`${
                picture
                  ? "create-post__popup-success"
                  : "create-post__popup-icon-regular"
              }`}
            />
          </span>
          {isAddingPicture && (
            <div ref={popupRef} className="create-post__add-link-popup">
              <div className="create-post__popup-main">
                <KeyboardBackspaceRounded
                  className="create-post__popup-backspace"
                  onClick={() => toggleAddPicture(false)}
                />
                <input
                  id="create-post__input"
                  className="text-input"
                  type="text"
                  placeholder="Paste in an image link"
                  value={currentPicture}
                  onChange={(evt) => updateCurrentPicture(evt.target.value)}
                  onKeyPress={handleSubmitPicture}
                />
              </div>
              <div className="create-post__additional-actions">
                <div
                  className={`flex-center create-post__popup-info${
                    picture && " create-post__popup-completed"
                  }`}
                >
                  <Link
                    id="create-post__popup-icon"
                    className={`${
                      picture
                        ? "create-post__popup-success"
                        : "create-post__popup-icon-regular"
                    }`}
                  />
                  {picture}
                </div>
                <div
                  className={`flex-center create-post__action ${
                    picture || (currentPicture && "create-post__popup-clear")
                  }`}
                >
                  <Clear
                    id="create-post__popup-icon"
                    className={`${
                      picture || currentPicture
                        ? "create-post__popup-danger"
                        : "create-post__popup-icon-regular"
                    }`}
                  />
                  <span
                    className={`${
                      picture || currentPicture
                        ? "create-post__popup-danger"
                        : "create-post__popup-text-regular"
                    }`}
                    onClick={clearPicture}
                  >
                    Clear
                  </span>
                </div>
              </div>
            </div>
          )}
        </div>
      </form>
    </div>
  );
}

export default CreatePost;
