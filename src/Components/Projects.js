import React from "react";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/esm/Container";


const Projects = () => {
  return (
    <>
      <Container style={{display: "flex", paddingTop: "5%", justifyContent: "center", marginBottom: "5%"}}>
        <Card className="opacity-containers">
      <a className="projects" style={{color: "white"}} href="https://infinitelyann.github.io/Project-1/">
            
          <Card.Body><img style={{width: "75%"}} src="https://i.imgur.com/ifGTsZt.gif"/>
           </Card.Body>
          <Card.Footer style={{textAlign: "center"}}>BlackJack</Card.Footer>
        </a>
        <Card.Body className="description">
          <p>A simplified take on the casino classic card game of BlackJack- dueling against the dealer(computer)
to get the sum of your randomized hand to 21- without going over!
<br/>
-Implementation, manipulation and rendering of data from <a href="https://www.deckofcardsapi.com/">Deck of Cards API</a>
<br/>
-Features HTML, CSS3, JavaScript (DOM Manipulation)
<br/>
-Follows best development practices</p>
          </Card.Body>
        </Card>
        <Card className="opacity-containers">
        <a className="projects" style={{color: "white"}} href="https://angstyblog.fly.dev/" target="_blank">
        
          <Card.Body><img style={{width: "75%"}} src="https://i.imgur.com/bnPd5Gy.gif" alt="BlogPost"/>
          </Card.Body>
          <Card.Footer style={{textAlign: "center"}}>Angsty BlogPost</Card.Footer>
        </a>
        <Card.Body className="description">
          <p>An application allowing users to sign-in/up, choose a theme for a blog-style text post from
two different color pickers; a foreground/text color and a background color, and a photo.
<br/>
-Features HTML, CSS3, Express.js, LiquidJS, Mongoose, Bootstrap</p>
          </Card.Body>
        </Card>
        <Card className="opacity-containers">
        <a className="projects" style={{color: "white"}} href="https://quizard-by-tuneheads.netlify.app/" target="_blank">
          <Card.Body><img style={{width: "75%"}} src="https://i.imgur.com/3Vbho2k.gif" alt="Quizard"/>
          </Card.Body>
          <Card.Footer style={{textAlign: "center"}}>Quizard</Card.Footer>
          </a>
          <Card.Body className="description">
          <p>A trivia game that allows users to create and play their own trivia game. 
            <br/>This application also allows
the user to play a trivia game from an API call that implements the user's input for category, difficulty, and
amount of questions. Give it a try and see how well you do!
<br/>
-Implementation, manipulation and rendering of data from <a href="https://opentdb.com/">Open Trivia Database</a>
<br/>
-Features React, Mongoose, Express.js, Bootstrap, HTML and CSS3</p>
          </Card.Body>
        </Card>
        <Card className="opacity-containers">
        <a className="projects" style={{color: "white"}} href="https://github.com/infinitelyann/Capstone-Client" target="_blank">
          <Card.Body><img style={{width: "75%"}} src="https://i.imgur.com/rESn5A2.gif" alt="blogr"/>
          </Card.Body>
          <Card.Footer style={{textAlign: "center" }}>blogr</Card.Footer>
          </a>
          <Card.Body className="description">
          </Card.Body>
        </Card>
       
      </Container>
      <hr style={{borderTop: "dotted"}} />
    </>
    
     

  );
};
export default Projects;
