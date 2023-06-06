import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import "./userpost.css";
import React, { useState } from "react";

export default function UserPost(props) {
  const [likes, setLikes] = useState(props.likecount || 0);

  const handleLike = () => {
    setLikes(likes + 1);
  };

  return (
    <Card className="custom-card" style={{ width: "18rem" }}>
      <Card.Img className="custom-image" variant="top" src={props.img} />
      <Card.Body>
        <Card.Title className="custom-title">{props.username}</Card.Title>
        <Card.Text className="custom-text">{props.text}</Card.Text>
        <Button variant="primary" onClick={() => handleLike()}>
          Like
        </Button>
        <div>{likes}</div>
      </Card.Body>
    </Card>
  );
}
