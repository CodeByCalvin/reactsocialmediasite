import "./App.css";
import React from "react";
import UserPost from "./components/userpost";
import { Container, Row, Col, Nav, Navbar } from "react-bootstrap";
import PostForm from "./components/userInput";
import { HashRouter, Route, Routes, Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import toastr from "toastr";
import "toastr/build/toastr.min.css";

// cool image link https://picsum.photos/200/300

function App() {
  <Helmet>
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link
      href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap"
      rel="stylesheet"
    />
  </Helmet>;

  toastr.options = {
    closeButton: true,
    debug: false,
    newestOnTop: false,
    progressBar: true,
    positionClass: "toast-bottom-right",
    preventDuplicates: false,
    onclick: null,
    showDuration: "300",
    hideDuration: "1000",
    timeOut: "3000",
    extendedTimeOut: "1000",
    showEasing: "swing",
    hideEasing: "linear",
    showMethod: "fadeIn",
    hideMethod: "fadeOut",
  };

  const [userPosts, setUserPosts] = React.useState([]);

  const handleSubmit = (userInfo) => {
    setUserPosts([...userPosts, userInfo]);
    toastr["success"]("Post submitted", "Success");
  };

  function Home() {
    return (
      <Container fluid>
        <Row>
          <Col md={6}>
            <div className="post-title-container">
              <h1 className="title">Welcome to Social Site</h1>
            </div>
            <h2 className="">Add a post</h2>
            <PostForm handleSubmit={(userPost) => handleSubmit(userPost)} />
          </Col>
          <Col md={6} className="user-posts-home">
            <div className="post-title-container">
              <h2 className="title">User posts</h2>
            </div>
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
            <div className="post-title-container">
              <h2 className="title">User posts</h2>
            </div>
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
        <Navbar bg="dark" variant="dark" className="mb-4">
          <Container fluid className="ml-2 mr-2">
            <Navbar.Brand href="" className="mr-4">
              Social Site
            </Navbar.Brand>
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
