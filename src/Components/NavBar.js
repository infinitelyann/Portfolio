import Container from "react-bootstrap/Container";
import NavLink from "react-bootstrap/esm/NavLink";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";





const Navigation = () => {
  return (
    <>
      <Navbar style={{ float: "right" }}>
        <Container>
          <Nav>
            <a className="nav-links" href="https://github.com/infinitelyann" target="_blank">GitHub</a>
            <a className="nav-links" href="https://www.linkedin.com/in/stephanie-a-parker/" target="_blank">LinkedIn</a>
            <a className="nav-links" href="https://docs.google.com/document/d/1arCYtD_x2iWU9k4sYe8V4jxN2j5b18ClRk4r5p8PJ6Y/edit" target="_blank">Resume</a>
            
          </Nav>
        </Container>
      </Navbar>
    </>
  );
};

export default Navigation;
