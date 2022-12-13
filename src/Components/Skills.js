import React from "react";
import Container from "react-bootstrap/esm/Container";

const Skills = () =>{
return(
    <>

    <Container style={{display: 'flex', justifyContent: "center", paddingBottom: "10px"}}>

    <i className="icon devicon-html5-plain colored"></i>    
    <i className="icon devicon-javascript-plain colored"></i> 
    <i className="icon devicon-python-plain colored"></i> 
    <i className="icon devicon-react-original colored"></i>
    <i className="icon devicon-mongodb-plain colored"></i>
    <i className="icon devicon-django-plain colored"></i>
    <i className="icon devicon-css3-plain colored"></i>
    <i className="icon devicon-postgresql-plain colored"></i>
       
    <hr/>
    </Container>
    </>
)
}

export default Skills