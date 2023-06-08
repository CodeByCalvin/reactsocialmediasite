import React from "react";
import {
  MDBFooter,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBIcon,
} from "mdb-react-ui-kit";

import logo from "../imgs/Reactr.png";
import "./footer.css";

export default function Footer() {
  return (
    <MDBFooter className="text-center text-lg-start text-muted">
      <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
        {" "}
      </section>

      <section className="">
        <MDBContainer className="text-center text-md-start mt-5">
          <MDBRow className="mt-3">
            <MDBCol md="3" lg="4" xl="3" className="mx-auto mb-4">
              <img src={logo} alt="Reactr Logo" style={{ width: 150 }} />
              <p>
                Welcome to Reactr, the best place to share your thoughts and
                react to others!
              </p>
            </MDBCol>

            <MDBCol md="2" lg="2" xl="2" className="mx-auto mb-4">
              <h6
                className="text-uppercase font-weight-bold mb-4"
                style={{ textDecoration: "underline" }}
              >
                Features
              </h6>
              <p>
                <a href="#!" className="text-reset">
                  Post Creation
                </a>
              </p>
              <p>
                <a href="#!" className="text-reset">
                  Feed Browsing
                </a>
              </p>
              <p>
                <a href="#!" className="text-reset">
                  Messaging
                </a>
              </p>
              <p>
                <a href="#!" className="text-reset">
                  Notifications
                </a>
              </p>
            </MDBCol>

            <MDBCol md="3" lg="2" xl="2" className="mx-auto mb-4">
              <h6
                className="text-uppercase font-weight-bold mb-4"
                style={{ textDecoration: "underline" }}
              >
                Useful links
              </h6>
              <p>
                <a href="#!" className="text-reset">
                  User Guide
                </a>
              </p>
              <p>
                <a href="#!" className="text-reset">
                  Privacy Policy
                </a>
              </p>
              <p>
                <a href="#!" className="text-reset">
                  Terms of Service
                </a>
              </p>
              <p>
                <a href="#!" className="text-reset">
                  Support
                </a>
              </p>
            </MDBCol>

            <MDBCol md="4" lg="3" xl="3" className="mx-auto mb-md-0 mb-4">
              <h6
                className="text-uppercase font-weight-bold mb-4"
                style={{ textDecoration: "underline" }}
              >
                Contact
              </h6>
              <p>
                <MDBIcon icon="home" className="me-2" />
                23 Redstone Road, Sheffield, S13 9YX
              </p>
              <p>
                <MDBIcon icon="envelope" className="me-3" />
                info@reactr.com
              </p>
              <p>
                <MDBIcon icon="phone" className="me-3" /> 0114 123 4567
              </p>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </section>

      <div
        className="text-center p-4"
        style={{ backgroundColor: "rgba(0, 0, 0, 0.05)" }}
      >
        © 2023 Copyright:
        <a className="text-reset fw-bold" href="https://mdbootstrap.com/">
          Reactr.com
        </a>
      </div>
    </MDBFooter>
  );
}
