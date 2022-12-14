import React from "react";
import Container from "react-bootstrap/esm/Container";
import "../App.css";
const Skills = () =>{
return(
    <>
    <article>
    <Container id="skills" style={{display: 'flex', justifyContent: "center", paddingBottom: "10px", position: "relative", zIndex:"3"}} >

    <h3>Skills</h3>
    <br/>
    </Container>
    <Container id="skills-icons" style={{display: 'flex', justifyContent: "center", paddingBottom: "10px", position: "relative", zIndex:"1"}}>
   
    <i className="icon devicon-html5-plain colored"></i>    
    <i className="icon devicon-javascript-plain colored"></i> 
    <i className="icon devicon-python-plain colored"></i> 
    <i className="icon devicon-react-original colored"></i>
    <i className="icon devicon-mongodb-plain colored"></i>
    <i className="icon devicon-django-plain colored"></i>
    <i className="icon devicon-css3-plain colored"></i>
    <i className="icon devicon-postgresql-plain colored"></i>


       
    <hr style={{borderTop: "dotted"}} />
    </Container>

    </article>
    </>
)
}

export default Skills