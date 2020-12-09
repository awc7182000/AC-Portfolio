
import React from "react";
import {
  Button,
  Container,
} from "reactstrap";
import Card from 'react-bootstrap/Card'
import CardDeck from 'react-bootstrap/CardDeck'

export default (props) => {

  return (
    <>
      <div id="projects" className="section javascript-components">
        <Container>
          <div className="title">
          <hr class="rounded1"/>
          <h2>Projects</h2>
          </div>
          <CardDeck >
  <Card>
  <Card.Img variant="top" src={require("assets/img/Group-Project.PNG")} />
  <hr class="rounded"></hr>
  <Card.Body>
    <Card.Title style={{fontSize:40,textAlign:"center"}}>Photo Commenter</Card.Title>
    <Card.Text style={{fontSize:15,textAlign:"center"}}>
        This is a fully deployed Group Project that was a photo Commenting page similar to wedding picture websites
    </Card.Text>
  </Card.Body>
  <Card.Footer>
  <a target="_blank" rel="noopener noreferrer"href="https://groupproject.mrsontag.com/"><Button>Link to Website</Button></a>
  </Card.Footer>
</Card>
  <Card>
  <Card.Img variant="top"  src={require("assets/img/Player-Project.PNG")}/>
  <hr class="rounded1"></hr>
  <Card.Body>
    <Card.Title style={{fontSize:40,textAlign:"center"}}>Team Manager Project</Card.Title>
    <Card.Text style={{fontSize:15,textAlign:"center"}}>
      This Project was one of our Full Stack Projects that was a quick way to organize players on a team
    </Card.Text>
  </Card.Body>
  <Card.Footer>
  <a target="_blank" rel="noopener noreferrer" href="https://github.com/awc7182000/Team-Manager"><Button>Link to GitHub</Button></a>
  </Card.Footer>
</Card>
<Card>
  <Card.Img variant="top" src={require("assets/img/Product-Project.PNG")}/>
  <hr class="rounded"></hr>
  <Card.Body>
    <Card.Title style={{fontSize:40,textAlign:"center"}}>Product Manager</Card.Title>
    <Card.Text style={{fontSize:15,textAlign:"center"}}>
      One of my first Full Stack Projects that was a quick way to add, remove, and delete items from a list
    </Card.Text>
  </Card.Body>
  <Card.Footer>
  <a target="_blank" rel="noopener noreferrer" href="https://github.com/awc7182000/Product-manager-2"><Button>Link to GitHub</Button></a>
  </Card.Footer>
</Card>
</CardDeck>
<hr class="rounded1"/>
<h1>My Featured Project</h1>
        </Container>
      </div>{" "}
    </>
  );
}
