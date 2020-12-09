import React from "react";

// reactstrap components
import { Container, Row, Col } from "reactstrap";
import Image from 'react-bootstrap/Image'

// core components

function SectionNucleoIcons() {
  return (
    <>
      <div className="section section-dark section-nucleo-icons">
        <Container>
          <Row>
            <Col lg="6" md="12">
              <h2 className="title">About Me</h2>
              <br />
              <p className="description">
                I Started Learning coding in a bootcamp called Coding Dojo in August of 2020, I learned HTML, CSS, JavaScript, MongoDB, React. I'm looking for more ways to grow as a developer and make some great websites!
              </p>
              <br />
            </Col>
            <Image className="MyPhoto"  roundedCircle src={require("assets/img/MyPhoto.jpg")} />
          </Row>
        </Container>
      </div>{" "}
    </>
  );
}

export default SectionNucleoIcons;