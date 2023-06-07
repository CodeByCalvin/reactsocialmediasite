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
  // Add a state variable to keep track of whether the post has been liked
  const [likeStatus, setLikeStatus] = useState("none");
  const handleLike = () => {
    setLikeStatus(likeStatus === "liked" ? "none" : "liked");
  };
  const handleDislike = () => {
    setLikeStatus(likeStatus === "disliked" ? "none" : "disliked");
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
                {/* // Always add like/like-button class, if the post has been liked, we want to show a solid icon and add liked/disliked class*/}

                <div style={{ display: "flex", gap: "5px" }}>
                  <button
                    className={`like-button ${
                      likeStatus === "liked" ? "liked" : ""
                    }`}
                    onClick={handleLike}
                  >
                    <FontAwesomeIcon
                      icon={likeStatus === "liked" ? fasThumbsUp : farThumbsUp}
                    />{" "}
                  </button>

                  <button
                    className={`dislike-button ${
                      likeStatus === "disliked" ? "disliked" : ""
                    }`}
                    onClick={handleDislike}
                  >
                    <FontAwesomeIcon
                      icon={
                        likeStatus === "disliked"
                          ? fasThumbsDown
                          : farThumbsDown
                      }
                    />{" "}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
