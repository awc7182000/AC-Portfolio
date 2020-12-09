import React from "react";

// reactstrap components
import {
  Card,
  Button,
  Form,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Container,
  Row,
  Col,
} from "reactstrap";
import emailjs from 'emailjs-com';

  function sendEmail(e) {
    e.preventDefault();

    emailjs.sendForm('gmail', 'template_4jqgjcm', e.target, 'user_KoOI7hDrlyON3okk0MTTt')
      .then((result) => {
          console.log(result.text);
          alert('Your message has been submitted')
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset ()
    }



function SectionLogin() {
  return (
    <>
      <div
        className="section section-image section-login"
        style={{
          backgroundImage: "url(" + require("assets/img/login-image.jpg") + ")",
        }}
      >
        <Container>
        <Row>
            <Col className="mx-auto" lg="4" md="6">
              <div className="col text-center">
              <Card style={{paddingBottom:15}} color="primary" className="card-register">
                <h3 style={{marginBottom:0,marginTop:0}}className="title mx-auto">If you would like to message me</h3>
                <Form className="register-form">
                  <form className="contact-form" onSubmit={sendEmail}>
                  <label>Enter your Email</label>
                  <InputGroup className="form-group-no-border">
                    <InputGroupAddon addonType="prepend">
                      <InputGroupText>
                        <i className="nc-icon nc-email-85" />
                      </InputGroupText>
                    </InputGroupAddon>
                    <Input placeholder="Email" type="email" name="user_email" required />
                  </InputGroup>
                  <label>Enter your Name</label>
                  <InputGroup className="form-group-no-border">
                    <InputGroupAddon addonType="prepend">
                      <InputGroupText>
                        <i className="nc-icon nc-single-02" />
                      </InputGroupText>
                    </InputGroupAddon>
                    <Input placeholder="Name" type="Name" name="user_name" required />
                  </InputGroup>
                  <label>What would you like to say?</label>
                  <InputGroup className="form-group-no-border">
                    <InputGroupAddon addonType="prepend">
                      <InputGroupText>
                        <i className="nc-icon nc-send" />
                      </InputGroupText>
                    </InputGroupAddon>
                    <Input className="message" placeholder="Message" name="message" required/>
                  </InputGroup>
                        <Button type="submit" value="Send" >Send</Button>
                </form></Form>
              </Card>
              </div>
              </Col>
          </Row>
        </Container>
      </div>{" "}
    </>
  );
}

export default SectionLogin;