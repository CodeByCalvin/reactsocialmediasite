import "./App.css";
import React from "react";
import UserPost from "./components/userpost";
import { Container, Row, Col, Nav, Navbar } from "react-bootstrap";
import PostForm from "./components/userInput";
import { HashRouter, Route, Routes, Link } from "react-router-dom";

// cool image link https://picsum.photos/200/300

function App() {
  const [userPosts, setUserPosts] = React.useState([]);

  const handleSubmit = (userInfo) => {
    setUserPosts([...userPosts, userInfo]);
  };

  function Home() {
    return (
      <Container fluid>
        <Row>
          <Col md={6}>
            <h1>Welcome to Social Site</h1>
            <h2>Add a post</h2>
            <PostForm handleSubmit={(userPost) => handleSubmit(userPost)} />
          </Col>
          <Col md={6}>
            <h2>User posts</h2>
            <div className="user-posts-container">
              {userPosts.map((userPost, index) => {
                return (
                  <div key={index} className="mb-4">
                    <UserPost
                      img={"https://picsum.photos/200/300"}
                      username={userPost.username}
                      text={userPost.postText}
                    />
                  </div>
                );
              })}
            </div>
          </Col>
        </Row>
      </Container>
    );
  }

  function AddPost() {
    return (
      <Container fluid>
        <Row>
          <Col md={12}>
            <h2>User posts</h2>
            <div className="user-posts-container">
              {userPosts.map((userPost, index) => {
                return (
                  <div key={index} className="mb-4">
                    <UserPost
                      img={"https://picsum.photos/200/300"}
                      username={userPost.username}
                      text={userPost.postText}
                    />
                  </div>
                );
              })}
            </div>
          </Col>
        </Row>
      </Container>
    );
  }

  return (
    <div className="App">
      <HashRouter>
        <Navbar bg="dark" variant="dark">
          <Container>
            <Navbar.Brand href="">Social Site</Navbar.Brand>
            <Nav className="mr-auto">
              <Link to="/" className="nav-link">
                Home
              </Link>
              <Link to="/add-post" className="nav-link">
                Posts
              </Link>
            </Nav>
          </Container>
        </Navbar>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/add-post" element={<AddPost />} />
        </Routes>
      </HashRouter>
    </div>
  );
}

export default App;
