import { Fragment, useEffect, useState } from "react";
import useAuth from "../../../hooks/useAuth";
import useDatabase from "../../../hooks/useDatabase";
import StoryCard from "../../styles/StoryCard/StoryCard";
import CreatePost from "../CreatePost/CreatePost";
import Post from "../Post/Post";
import JeremyHeadshotSrc from "../../../assets/headshot_jeremy.jpg";
import AlexHeadshotSrc from "../../../assets/headshot_alex.jpg";
import HannahHeadshotSrc from "../../../assets/headshot_hannah.jpg";
import JeffHeadshotSrc from "../../../assets/headshot_jeff.jpg";
import "./Body.css";

function Body() {
  const { user } = useAuth();
  const { posts: postData } = useDatabase();
  const [posts, setPosts] = useState([]);

  const storyCardOptions = [
    {
      title: "Create a story",
      image: user?.photoURL,
      type: "create",
    },
    {
      title: "Jeremy's story",
      userName: "Jeremy Johnson",
      image: JeremyHeadshotSrc,
    },
    {
      title: "Alex's story",
      userName: "Alex Hamilton",
      image: AlexHeadshotSrc,
    },
    {
      title: "Hannah's story",
      userName: "Hannah Jacobs",
      image: HannahHeadshotSrc,
    },
    {
      title: "Jeff's story",
      userName: "Jeff Richards",
      image: JeffHeadshotSrc,
    },
  ];

  const staticStoryCards = storyCardOptions.map((option) => {
    return (
      <Fragment key={option.title}>
        <StoryCard
          type={option.type === "create" ? "createStoryCard" : "postCard"}
          userName={option.userName}
          postImgSrc={option.image}
          profileImgSrc={option.image}
        />
      </Fragment>
    );
  });

  useEffect(() => {
    setPosts(postData);
  }, [postData]);

  return (
    <div className="body">
      <div
        id="body__story-container"
        className="body__story-containers hidden-under-750"
      >
        {staticStoryCards}
      </div>
      <div className="body__create-post-container">
        <CreatePost />
      </div>
      <div className="body__post-container">
        {posts.map((post) => {
          return (
            <Post
              key={post.id}
              id={post.id}
              creator={post.creator}
              avatar={post.avatar}
              createdAt={post.createdAt}
              message={post.message}
              image={post.image}
              likes={post.likes}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Body;
