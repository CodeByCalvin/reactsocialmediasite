import "./App.css";
import React from "react";
import UserPost from "./components/userpost";
import { Container, Row, Col } from "react-bootstrap";
import PostForm from "./components/userInput";
import { HashRouter, Route, Routes } from "react-router-dom";
import { Helmet } from "react-helmet";
import toastr from "toastr";
import "toastr/build/toastr.min.css";
import Footer from "./components/footer";
import NavBar from "./components/navbar";

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
  const [theme, setTheme] = React.useState("light");

  const toggleTheme = () => {
    if (theme === "light") {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  };

  const handleToggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  React.useEffect(() => {
    document.body.className = theme;
  }, [theme]);

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
              <h1 className="title">
                Reactr<span className="copyright"> ©</span>
              </h1>
            </div>
            <h2 className="margin-bottom subtitle">Add a post</h2>
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
                      username={"@" + userPost.username}
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

  // `App ${theme}`
  return (
    <div className="App">
      <HashRouter>
        <NavBar handleToggleTheme={handleToggleTheme} theme={theme} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/add-post" element={<AddPost />} />
        </Routes>
        <Footer />
      </HashRouter>
    </div>
  );
}

export default App;
