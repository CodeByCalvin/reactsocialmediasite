import React from "react";
import { Button, Form, Container, Row, Col } from "react-bootstrap";
import Picker from "@emoji-mart/react";
import "./userInput.css";

function PostForm({ handleSubmit }) {
  // Form input
  const [username, setUsername] = React.useState("");
  const [postText, setPostText] = React.useState("");

  // Emoji picker
  const [showPicker, setShowPicker] = React.useState(false);

  const togglePicker = () => {
    setShowPicker(!showPicker);
  };

  const handleEmojiSelect = (emoji) => {
    setPostText((prevPostText) => prevPostText + emoji.native);
  };

  return (
    <div>
      <Form
        onSubmit={(e) => {
          e.preventDefault();
          handleSubmit({ username, postText });
        }}
      >
        <Form.Group className="mb-1" controlId="formBasicEmail">
          <Form.Control
            required
            type="username"
            placeholder="Enter username..."
            value={username}
            onChange={(e) => {
              setUsername(e.target.value);
            }}
          />
        </Form.Group>
        <hr />
        <br />
        <Form.Group className="mb-1" controlId="formImgUrl">
          <div style={{ display: "flex", alignItems: "center" }}>
            <Form.Control
              className="form-control"
              required
              type="text"
              placeholder="Add a post..."
              value={postText}
              onChange={(e) => setPostText(e.target.value)}
            />
          </div>
          <hr />
          <Container className="custom-input-container">
            <Row>
              <Col>
                <Button
                  className="custom-btn emoji"
                  style={{ margin: "0 10px 0 0" }}
                  onClick={togglePicker}
                >
                  😀
                </Button>
              </Col>
              <Col>
                <div className="post-button-container">
                  <button
                    className="custom-btn cancel"
                    style={{ margin: "0 0 0 10px" }}
                    // Clear all input fields
                    onClick={() => {
                      setUsername("");
                      setPostText("");
                    }}
                  >
                    Cancel
                  </button>
                  <button
                    className="custom-btn"
                    style={{ margin: "0 0 0 10px" }}
                    type="submit"
                  >
                    Post
                  </button>
                </div>
              </Col>
            </Row>
          </Container>
          <div className="d-flex justify-content-start">
            <div>
              {showPicker && (
                <Picker
                  emojiButtonSize={26}
                  emojiSize={20}
                  emojiButtonRadius={110}
                  onEmojiSelect={handleEmojiSelect}
                />
              )}
            </div>
          </div>
        </Form.Group>
      </Form>
    </div>
  );
}

export default PostForm;
