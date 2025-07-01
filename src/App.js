import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home.jsx";
import Post from "./pages/Posts/Posts.jsx";
import AddPost from "./pages/AddPost/AddPost.jsx";
import NotFound from "./components/NotFound/NotFound.jsx"
import { useState,useEffect } from "react";


function App() {
  const [posts, setPosts] = useState(() => {
    const savedPosts = localStorage.getItem("posts");
    return savedPosts ? JSON.parse(savedPosts) : [];
  });

  useEffect(() => {
    localStorage.setItem("posts", JSON.stringify(posts));
  }, [posts]);

  return (
    <>
    <Router >
      <Routes>
        <Route path="/" element={<Home posts={posts} />} />
        <Route path="/post/:id" element={<Post posts={posts}/>} />
        <Route path="/add-post" element={<AddPost posts={posts} setPosts={setPosts}/>} />
        <Route path="*" element={<NotFound/>}/>
      </Routes>
    </Router>
    </>
  );
}

export default App;
