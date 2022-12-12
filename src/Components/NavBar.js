import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

const Navigation = () => {
  return (
    <>
      <Navbar style={{ float: "right" }}>
        <Container>
          <Nav>
            <Nav.Link>GitHub</Nav.Link>
            <Nav.Link>About</Nav.Link>
            <Nav.Link>Contact Me</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
};

export default Navigation;
