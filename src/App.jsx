import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Header from "./components/Header";
import CreatePost from "./components/CreatePost";
import Sidebar from "./components/Sidebar";
import PostList from "./components/PostList";
import PostListProvider from "./store/post-list-store";
import { useState } from "react";

function App() {
  const [currentTab, setCurrentTab] = useState("Home");
  return (
    <PostListProvider>
      <div className="app-container">
        <Sidebar currentTab={currentTab} setCurrentTab={setCurrentTab}>
        </Sidebar>
        <div className="content">
          <Header />
          {currentTab === "Home" ? <PostList /> : <CreatePost />}
        </div>
      </div>
    </PostListProvider>
  );
};

export default App;
