import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
const Crude=(props)=>
{
    return (
        <div>
            <Navbar expand="lg" variant="dark" bg="primary">
              <Container>
                <Navbar.Brand >Fruits Bucket</Navbar.Brand>
              </Container>
            </Navbar>
          <Container>{props.children}</Container>
        </div>
      );
}
export default Crude;