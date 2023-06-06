import "./App.css";
import React from "react";
import UserPost from "./components/userpost";

function App() {
  return (
    <div className="App">
      <h1>User posts</h1>
      <UserPost
        img="https://picsum.photos/200/300"
        username="Ben Smith"
        text="This is a text post blah blah blah"
      />
      <UserPost
        img="https://picsum.photos/200/300"
        username="Ben Smith"
        text="This is a text post blah blah blah"
      />
      <UserPost
        img="https://picsum.photos/200/300"
        username="Ben Smith"
        text="This is a text post blah blah blah"
      />
    </div>
  );
}

export default App;
