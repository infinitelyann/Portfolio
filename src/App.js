import React from "react";
import Header from "./components/Heading";
import About from "./components/About";


import "./App.css";

const Home = () => {
  return (
    <>
      <div>
        <Header />
        <hr/>
      </div>
      <About/>
    </>
  );
};

export default Home;
