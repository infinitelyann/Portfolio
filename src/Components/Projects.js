import React from "react";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/esm/Container";


const Projects = () => {
  return (
    
      <Container style={{display: "flex"}}>
        <Card>
            <img src="https://i.imgur.com/QcM51DE.png" alt="BlackJack"/>
          <Card.Body ></Card.Body>
          <Card.Footer><a href="https://infinitelyann.github.io/Project-1/">BlackJack</a></Card.Footer>
        </Card>
        <Card>
        <img src="https://i.imgur.com/HVcQkTQ.png" alt="BlogPost"/>
          <Card.Body></Card.Body>
          <Card.Footer><a href="https://angstyblog.fly.dev/">Angsty BlogPost</a></Card.Footer>
        </Card>
        <Card>
        <img  src="https://i.imgur.com/Wm2if6H.png" alt="Quizard"/>
          <Card.Body></Card.Body>
          <Card.Footer><a href="https://quizard-by-tuneheads.netlify.app/">Quizard</a></Card.Footer>
        </Card>
        <Card>
        <img src="https://i.imgur.com/2VZub1C.png" alt="blogr"/>
          <Card.Body></Card.Body>
          <Card.Footer>blogr</Card.Footer>
        </Card>
      </Container>

  );
};
export default Projects;
