import React from "react";
import Container from "react-bootstrap/esm/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";


const About = () =>{
    return(
        <>
    {/* <br/>
        <Navbar style={{float:"right", marginTop: "5%"}}>
            <Nav>
            <a className="nav-links" href="https://www.linkedin.com/in/stephanie-a-parker/" target="_blank">LinkedIn</a>
            <a className="nav-links" href="https://github.com/infinitelyann" target="_blank">GitHub</a>
            <a className="nav-links" href="https://docs.google.com/document/d/1arCYtD_x2iWU9k4sYe8V4jxN2j5b18ClRk4r5p8PJ6Y/edit" target="_blank">Resume</a>
            </Nav>
        </Navbar>
        <br/> */}

       <Container style={{ width:"60%", float: "left"}}>
       
        <h3>Hello!</h3>
            <p> 
                I'm Stephanie, a Full-Stack Software Engineer.
                I graduated from General Assembly's 12 week Software Engineering Immersive Bootcamp on December 2nd, 2022.
                <br/>
                I have a natural attraction to leadership and teamwork. 
                <br/>
                Let's see what we can come up with together! 
            </p>
            
       </Container>

       <hr/>

        
        </>
    )
}
export default About