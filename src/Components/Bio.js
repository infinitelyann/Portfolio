import React from "react";
import Navigation from "./NavBar";

const Bio = () => {
    return(
        <>
         <article className="container-sm" style={{marginTop: "15px", }}>
        <img style={{width: "200px", borderRadius: "50%", border: "solid", float: "left", position: "absolute", zIndex: "3" }} src="https://i.imgur.com/RhdHDXT.jpg" alt="stephanie"/>
        <div style={{color: "white", backgroundColor: "black", opacity: ".75", borderRadius: "25px", position: "relative", zIndex: "1", textAlign: "right", padding:"10px"}}>
        <h4 className="sm-font">Stephanie Parker</h4>
        <h6 className="sm-font">Full-Stack Software Enginner</h6>
        </div>
        <Navigation />
        </article>
        </>
    )
}

export default Bio