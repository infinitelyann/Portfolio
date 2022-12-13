import React from "react";
import Container from "react-bootstrap/esm/Container";
import Navigation from "./NavBar";
import Projects from "./Projects";
import About from "./About";


const Header = () => {
    return(
        <>
         <article className="container-sm" style={{marginTop: "15px", }}>
        <img style={{width: "200px", borderRadius: "50%", border: "solid", float: "left", position: "absolute", zIndex: "3" }} src="https://i.imgur.com/RhdHDXT.jpg" alt="stephanie"/>
        <div style={{color: "white", backgroundColor: "black", opacity: ".75", borderRadius: "25px", position: "relative", zIndex: "1", textAlign: "right", padding:"10px"}}>
        <h4 className="sm-font">Stephanie Parker</h4>
        <h6 className="sm-font">Full-Stack Software Engineer</h6>
        </div>
        <Navigation />
        </article>
        <Container style={{marginTop: "150px"}}>
        <About/>
        <Projects />
        </Container>
        </>
    )
}

export default Header