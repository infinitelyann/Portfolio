import React from "react";
import Container from "react-bootstrap/esm/Container";


const About = () =>{
    return(
        <>

       <Container style={{ width:"60%", float: "left", marginTop: "10%"}}>
       
        <h3>Hello!</h3>
            <p style={{paddingBottom: "5%"}}> 
                I'm Stephanie, a Full-Stack Software Engineer.
                I graduated from General Assembly's 12 week Software Engineering Immersive Bootcamp on December 2nd, 2022.
                <br/>
                I have a natural attraction to leadership and teamwork. 
                <br/>
                Let's see what we can come up with together! 
            </p>
            
       <hr style={{borderTop: "dotted"}} />
       </Container>

       <hr style={{borderTop: "dotted"}} />
        
        </>
    )
}
export default About