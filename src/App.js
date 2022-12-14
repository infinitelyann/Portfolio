import React from "react";
import Header from "./components/Heading";
import Skills from "./components/Skills";
import Contact from "./components/Contact";


import "./App.css";

const Home = () => {
  return (
    <>
      <div>
        <Header />
      </div>
      <Skills/>
    <Contact/>
    </>
  );
};

export default Home;
