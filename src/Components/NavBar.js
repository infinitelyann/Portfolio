import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";


const Navigation = () => {
  return (
    <>
      <Navbar style={{ float: "right" }}>
        <Container>
          <Nav>
            <Nav.Link><a style={{textDecoration: "none", color: "inherit"}} href="https://github.com/infinitelyann" target="_blank">GitHub</a></Nav.Link>
            <Nav.Link>About</Nav.Link>
            <Nav.Link>Contact Me</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
};

export default Navigation;
