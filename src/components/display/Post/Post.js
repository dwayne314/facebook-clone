import useAuth from "../../../hooks/useAuth";
import useDatabase from "../../../hooks/useDatabase";
import { formatDate } from "../../../utils";
import Avatar from "@mui/material/Avatar";
import {
  ThumbUpAltOutlined,
  ChatBubbleOutlineOutlined,
} from "@mui/icons-material";
import "./Post.css";

function Post({ id, creator, avatar, message, image, likes, createdAt }) {
  const { likePost } = useDatabase();
  const { user } = useAuth();

  function submitLike() {
    likePost(id, user.uid);
  }

  return (
    <div key={`post-${id}`} className="post">
      <div className="post__header-container">
        <span className="post__avatar">
          <Avatar src={avatar} />
        </span>
        <div className="post__text-container">
          <span className="post__text normal-text bolded">{creator}</span>
          <span className="post__subtext small-text alt-text bolded">
            {formatDate(new Date(createdAt))}
          </span>
        </div>
      </div>
      <div className="post__message-container">
        <span>{message}</span>
      </div>
      {image && (
        <span className="post__img-container">
          {/* eslint-disable-next-line */}
          <img src={image} alt="This image could not be found."></img>
        </span>
      )}
      <div className="post__data-info-container alt-text">
        <span>Likes: {likes?.length}</span>
        <span>Comments: 0</span>
      </div>
      <hr></hr>
      <div className="post__data-action-container alt-text">
        <div className="post__data-action" onClick={submitLike}>
          <span className="post__data-action-icon-container">
            <ThumbUpAltOutlined />
          </span>
          <span>Like</span>
        </div>
        <div className="post__data-action">
          <span className="post__data-action-icon-container">
            <ChatBubbleOutlineOutlined />
          </span>
          <span>Comment</span>
        </div>
      </div>
    </div>
  );
}

export default Post;
