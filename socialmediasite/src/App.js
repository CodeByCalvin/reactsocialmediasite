import "./App.css";
import React from "react";
import UserPost from "./components/userpost";
import { Container, Row, Col } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

const initialUserPosts = [
  {
    img: "https://picsum.photos/200/300",
    username: "Ben Smith",
    text: "This is another text post blah blah blah",
  },
  {
    img: "https://picsum.photos/200/300",
    username: "Sophie Smith",
    text: "This is another text post blah blah blah",
  },
  {
    img: "https://picsum.photos/200/300",
    username: "Charlotte Smith",
    text: "This is a third text post blah blah blah",
  },
];

function App() {
  const [userPosts, setUserPosts] = React.useState([]);
  const [username, setUsername] = React.useState("");
  const [imgUrl, setImgUrl] = React.useState("");
  const [postText, setPostText] = React.useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const newUserPost = { username, imgUrl, postText };
    setUserPosts([...userPosts, newUserPost]);
  };

  return (
    <div className="App">
      <h1>User posts</h1>
      <Container fluid>
        <Row>
          {userPosts.map((userPost, index) => {
            return (
              <Col key={index}>
                <UserPost
                  img={userPost.imgUrl}
                  username={userPost.username}
                  text={userPost.postText}
                />
              </Col>
            );
          })}
        </Row>
      </Container>

      <h1>Add a post</h1>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Username</Form.Label>
          <Form.Control
            type="username"
            placeholder="Enter username"
            onChange={(e) => setUsername(e.target.value)}
          />
          <Form.Text className="text-muted">
            We'll never share your username with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formImgUrl">
          <Form.Label>Attach an image</Form.Label>
          <Form.Control
            type="imageurl"
            placeholder="Image URL"
            onChange={(e) => setImgUrl(e.target.value)}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formPostText">
          <Form.Label>Attach text to your post</Form.Label>
          <Form.Control
            type="text"
            placeholder="Post text"
            onChange={(e) => setPostText(e.target.value)}
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          Post
        </Button>
      </Form>
    </div>
  );
}

export default App;
