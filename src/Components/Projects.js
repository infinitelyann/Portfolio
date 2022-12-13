import React from "react";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/esm/Container";


const Projects = () => {
  return (
    
      <Container style={{display: "flex"}}>
        <Card className="opacity-containers">
            
          <Card.Body><img style={{width: "150px"}} src="https://i.imgur.com/QcM51DE.png" alt="BlackJack"/></Card.Body>
          <Card.Footer><a style={{color: "white"}} href="https://infinitelyann.github.io/Project-1/">BlackJack</a></Card.Footer>
        </Card>
        <Card className="opacity-containers">
        
          <Card.Body><img style={{width: "150px"}} src="https://i.imgur.com/HVcQkTQ.png" alt="BlogPost"/></Card.Body>
          <Card.Footer><a style={{color: "white"}} href="https://angstyblog.fly.dev/" target="_blank">Angsty BlogPost</a></Card.Footer>
        </Card>
        <Card className="opacity-containers">
        
          <Card.Body><img style={{width: "150px"}} src="https://i.imgur.com/Wm2if6H.png" alt="Quizard"/></Card.Body>
          <Card.Footer><a style={{color: "white"}} href="https://quizard-by-tuneheads.netlify.app/" target="_blank">Quizard</a></Card.Footer>
        </Card>
        <Card className="opacity-containers">
        
          <Card.Body><img style={{width: "150px"}} src="https://i.imgur.com/2VZub1C.png" alt="blogr"/></Card.Body>
          <Card.Footer><a style={{color: "white"}} href="https://github.com/infinitelyann/Capstone-Client" target="_blank">blogr</a></Card.Footer>
        </Card>
     
      </Container>
     

  );
};
export default Projects;
