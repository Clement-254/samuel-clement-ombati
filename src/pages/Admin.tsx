import { useState } from "react";

export default function Admin() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const submit = async () => {
    await fetch("http://localhost:5000/api/posts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ title, content })
    });
  };

  return (
    <div>
      <input onChange={(e) => setTitle(e.target.value)} />
      <textarea onChange={(e) => setContent(e.target.value)} />
      <button onClick={submit}>Publish</button>
    </div>
  );
}