import { createContext, useContext, useEffect, useState } from "react";
import {
  db,
  onSnapshot,
  collection,
  orderBy,
  addDoc,
  doc,
  arrayUnion,
  updateDoc,
  query,
} from "../firebase";

const DatabaseContext = createContext({});

export const DatabaseProvider = ({ children }) => {
  const [posts, setPosts] = useState([]);
  const savePost = async ({ creator, avatar, createdAt, message, image }) => {
    try {
      await addDoc(collection(db, "posts"), {
        creator,
        avatar,
        message,
        image,
        likes: [],
        comments: [],
        createdAt,
      });
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  };

  const likePost = async (postId, userId) => {
    const userAlreadyLikesPost =
      posts
        .find((post) => post.id === postId)
        .likes.filter((like) => like.userId === userId).length > 0;

    if (!userAlreadyLikesPost) {
      const postLikesRef = doc(db, "posts", postId);
      await updateDoc(postLikesRef, {
        likes: arrayUnion({ userId, createdAt: Date.now() }),
      });
    }
  };

  useEffect(() => {
    const allPostsQuery = query(
      collection(db, "posts"),
      orderBy("createdAt", "desc")
    );
    const unsubscribe = onSnapshot(allPostsQuery, (querySnapshot) => {
      const { docs } = querySnapshot;
      const posts = docs.map((doc) => ({ id: doc.id, ...doc.data() }));
      setPosts(posts);
    });

    return unsubscribe;
  }, []);

  return (
    <DatabaseContext.Provider value={{ posts, savePost, likePost }}>
      {children}
    </DatabaseContext.Provider>
  );
};

export default function useDatabase() {
  return useContext(DatabaseContext);
}
