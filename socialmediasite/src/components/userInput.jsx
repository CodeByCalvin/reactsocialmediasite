import React from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Picker from "@emoji-mart/react";

function PostForm({ handleSubmit }) {
  const [username, setUsername] = React.useState("");
  const [imgUrl, setImgUrl] = React.useState("");
  const [postText, setPostText] = React.useState("");

  const handleEmojiSelect = (emoji) => {
    setPostText((prevPostText) => prevPostText + emoji.native);
  };

  return (
    <Form
      onSubmit={(e) => {
        e.preventDefault();
        handleSubmit({ username, imgUrl, postText });
      }}
    >
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Username</Form.Label>
        <Form.Control
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
          value={postText}
          onChange={(e) => setPostText(e.target.value)}
        />
        <Picker onEmojiSelect={handleEmojiSelect} />
      </Form.Group>
      <Button variant="primary" type="submit">
        Post
      </Button>
    </Form>
  );
}

export default PostForm;
