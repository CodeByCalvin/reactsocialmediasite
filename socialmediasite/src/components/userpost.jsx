import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import "./userpost.css";
import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faThumbsUp as farThumbsUp } from "@fortawesome/free-regular-svg-icons";
import { faThumbsUp as fasThumbsUp } from "@fortawesome/free-solid-svg-icons";
import { faThumbsDown as farThumbsDown } from "@fortawesome/free-regular-svg-icons";
import { faThumbsDown as fasThumbsDown } from "@fortawesome/free-solid-svg-icons";

export default function UserPost(props) {
  const [currentDate, setCurrentDate] = useState(new Date());

  const formattedDate = currentDate.toLocaleString("en-US", {
    dateStyle: "short", // Display only the date
    timeStyle: "short", // Display only the time
  });

  useEffect(() => {
    // Update the current date every second
    const interval = setInterval(() => {
      setCurrentDate(new Date());
    }, 1000);

    // Clear the interval when the component unmounts
    return () => {
      clearInterval(interval);
    };
  }, []);

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
          <button
            className="custom-button close-button"
            onClick={() => props.closePost(props.id)}
          >
            X
          </button>
          <Card.Title className="custom-title">{props.username}</Card.Title>
          <Card.Text className="custom-text">{props.text}</Card.Text>
          <hr />
          <Container fluid>
            <Row>
              <Col className="pl-0">
                <div>
                  <p style={{ fontSize: "16px" }}>{formattedDate.toString()}</p>
                </div>
              </Col>
              <Col className="pr-0">
                <div
                  style={{ display: "flex", justifyContent: "flex-end" }}
                  className="footer"
                >
                  <div style={{ display: "flex", justifyContent: "center" }}>
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        marginRight: "0px",
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
                            icon={
                              likeStatus === "liked" ? fasThumbsUp : farThumbsUp
                            }
                          />{" "}
                        </button>
                        <div style={{ width: "5px" }}></div>
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
              </Col>
            </Row>
          </Container>
        </div>
      </div>
    </div>
  );
}
