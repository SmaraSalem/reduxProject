import "./App.css";
import ListeTache from "./component/ListeTache";
import AjouterTache from "./component/AjouterTache";
import "./component/style.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Fragment } from "react";

function App() {
  return (
    <Fragment>
    <Container className="globale">
      <Row className="tous" >
        <Col md={3} className='formajout'>
          <AjouterTache />
        </Col>

        <Col md ={6}  className='mt-10'>
        <ListeTache />
          
        </Col>

        {/*<Col md={3} className='formajout'>
         <AjouterTache />
         </Col>*/} 
        
      </Row>
    </Container>
    </Fragment>
  );
}

export default App;
