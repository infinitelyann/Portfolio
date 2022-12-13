import React from "react";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/esm/Container";


const Projects = () => {
  return (
    <>
      <Container style={{display: "flex", paddingTop: "5%", justifyContent: "center", marginBottom: "5%"}}>
        <Card className="opacity-containers">
      <a style={{color: "white"}} href="https://infinitelyann.github.io/Project-1/">
            
          <Card.Body><img style={{width: "75%"}} src="https://i.imgur.com/ifGTsZt.gif"/> </Card.Body>
          <Card.Footer style={{textAlign: "center"}}>BlackJack</Card.Footer>
        </a>
        </Card>
        <Card className="opacity-containers">
        <a style={{color: "white"}} href="https://angstyblog.fly.dev/" target="_blank">
        
          <Card.Body><img style={{width: "75%"}} src="https://i.imgur.com/bnPd5Gy.gif" alt="BlogPost"/></Card.Body>
          <Card.Footer style={{textAlign: "center"}}>Angsty BlogPost</Card.Footer>
        </a>
        </Card>
        <Card className="opacity-containers">
        <a style={{color: "white"}} href="https://quizard-by-tuneheads.netlify.app/" target="_blank">
          <Card.Body><img style={{width: "75%"}} src="https://i.imgur.com/3Vbho2k.gif" alt="Quizard"/></Card.Body>
          <Card.Footer style={{textAlign: "center"}}>Quizard</Card.Footer>
          </a>
        </Card>
        <Card className="opacity-containers">
        <a style={{color: "white"}} href="https://github.com/infinitelyann/Capstone-Client" target="_blank">
          <Card.Body><img style={{width: "75%"}} src="https://i.imgur.com/rESn5A2.gif" alt="blogr"/></Card.Body>
          <Card.Footer style={{textAlign: "center" }}>blogr</Card.Footer>
          </a>
        </Card>
       
      </Container>
      <hr style={{borderTop: "dotted"}} />
    </>
    
     

  );
};
export default Projects;
