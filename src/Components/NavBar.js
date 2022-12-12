import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const Navigation = () =>{
    return(
        <>
        <Navbar style={{float: "right"}}>
            <Container>
                <Nav>
                   
         <Nav.Link>BlackJack</Nav.Link>
         <Nav.Link>AngstyBlogPost</Nav.Link>
         <Nav.Link>Quizard</Nav.Link>
         <Nav.Link>blogr</Nav.Link>
                </Nav>
            </Container>
        </Navbar>
        </>
    )
}

export default Navigation