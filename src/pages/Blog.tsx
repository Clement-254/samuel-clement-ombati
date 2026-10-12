import { useEffect, useState } from "react";
import { getPosts } from "../lib/api";

export default function Blog() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    getPosts().then(setPosts);
  }, []);

  return (
    <div>
      <h1>Blog</h1>

      {posts.map((post: any) => (
        <div key={post._id}>
          <h2>{post.title}</h2>
          <p>{post.content}</p>
        </div>
      ))}
    </div>
  );
}