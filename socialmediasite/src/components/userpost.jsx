import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import "./userpost.css";
import React, { useState } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faThumbsUp as farThumbsUp } from "@fortawesome/free-regular-svg-icons";
import { faThumbsUp as fasThumbsUp } from "@fortawesome/free-solid-svg-icons";
import { faThumbsDown as farThumbsDown } from "@fortawesome/free-regular-svg-icons";
import { faThumbsDown as fasThumbsDown } from "@fortawesome/free-solid-svg-icons";

export default function UserPost(props) {
  const [isLiked, setIsLiked] = useState(false);
  const [isDisliked, setIsDisliked] = useState(false);

  const handleLike = () => {
    setIsLiked(!isLiked);
  };

  const handleDislike = () => {
    setIsDisliked(!isDisliked);
  };

  return (
    <div className="card-container">
      <div className="custom-card">
        <Card.Img className="custom-image" variant="top" src={props.img} />
        <div className="card-body-container">
          <Card.Title className="custom-title">{props.username}</Card.Title>
          <Card.Text className="custom-text">{props.text}</Card.Text>

          <div
            style={{ display: "flex", justifyContent: "flex-end" }}
            className="footer"
          >
            <div style={{ display: "flex", justifyContent: "center" }}>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  marginRight: "10px",
                }}
              >
                <Button variant="primary" onClick={handleLike}>
                  <FontAwesomeIcon icon={isLiked ? fasThumbsUp : farThumbsUp} />{" "}
                </Button>
              </div>
              <div style={{ display: "flex", alignItems: "center" }}>
                <Button
                  className="custom-dislike-button"
                  onClick={() => handleDislike()}
                >
                  <FontAwesomeIcon
                    icon={isDisliked ? fasThumbsDown : farThumbsDown}
                  />{" "}
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
