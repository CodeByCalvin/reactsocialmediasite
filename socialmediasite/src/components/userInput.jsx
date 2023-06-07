import React, { useEffect } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Picker from "@emoji-mart/react";
import "./userInput.css";

function PostForm({ handleSubmit }) {
  const [username, setUsername] = React.useState("");
  const [postText, setPostText] = React.useState("");

  const [showPicker, setShowPicker] = React.useState(false);

  const togglePicker = () => {
    setShowPicker(!showPicker);
  };

  const handleEmojiSelect = (emoji) => {
    setPostText((prevPostText) => prevPostText + emoji.native);
  };

  return (
    <Form
      onSubmit={(e) => {
        e.preventDefault();
        handleSubmit({ username, postText });
      }}
    >
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Username</Form.Label>
        <Form.Control
          required
          type="username"
          placeholder="Enter username"
          onChange={(e) => {
            setUsername(e.target.value);
          }}
        />
        <Form.Text className="text-muted">
          We'll never share your username with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formPostText">
        <Form.Label>Attach text to your post</Form.Label>

        <div style={{ display: "flex", alignItems: "center" }}>
          <Form.Control
            required
            type="text"
            placeholder="Post text"
            value={postText}
            onChange={(e) => setPostText(e.target.value)}
          />
          <Button onClick={togglePicker}>😀</Button>
        </div>
        <Button variant="primary" type="submit">
          Post
        </Button>
        <div className="d-flex justify-content-end">
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
  );
}

export default PostForm;
