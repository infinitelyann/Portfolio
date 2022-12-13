import React from "react";
import Container from "react-bootstrap/esm/Container";

const About = () =>{
    return(
        <>
        <hr/>
       <Container style={{ width:"60%"}}>
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
       <Container style={{display: 'flex', justifyContent: "center", paddingBottom: "10px"}}>

       <i className="icon" style={{padding: "20px", color: "black", fontSize: "75px", opacity: ".75"}} class="devicon-html5-plain-wordmark"></i>    
       <i className="icon" style={{padding: "20px", color: "black", fontSize: "75px", opacity: ".75"}} class="devicon-javascript-plain"></i> 
       <i className="icon" style={{padding: "20px", color: "black", fontSize: "75px", opacity: ".75"}} class="devicon-python-plain"></i> 
       <i className="icon" style={{padding: "20px", color: "black", fontSize: "75px", opacity: ".75"}} class="devicon-react-original"></i>
          
       </Container>
       <hr/>
        </>
    )
}
export default About