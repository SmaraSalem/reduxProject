import React, { useState } from "react";
import { useSelector } from "react-redux";
import Tache from "./Tache";
import "./style.css";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";


function ListeTache() {

  
  const [arguderecherche, setArguderech] = useState("");
  
  


  


  const changeArgderech = (a) => {
    switch (a) {
      case "non":
        setArguderech("non");
        break;
      case "oui":
        setArguderech("oui");
        break;
      default:
        setArguderech("");
    }
  };

  const taches = useSelector((state) => state.taches);
  const tachesfiltre = taches.filter((el) =>
    el.isDone.toUpperCase().includes(arguderecherche.toUpperCase())
  );
  


  return (
    <>
      <Row className="button-grid mt-5">
        <Col md={4}>
          <button
            type="button"
            class="btn btn-danger"
            onClick={() => changeArgderech("non")}
          >
            pas fini
          </button>
        </Col>
        <Col md={4}>
          {" "}
          <button
            type="button"
            class="btn btn-success"
            onClick={() => changeArgderech("oui")}
          >
            fini
          </button>
        </Col>
        <Col md={4}>
          {" "}
          <button
            type="button"
            class="btn btn-dark"
            onClick={() => changeArgderech("all")}
          >
            tous
          </button>
        </Col>
      </Row>
      
    

      
      <Row className="mt-5 ">
        <div className="listetache">
          {tachesfiltre.map((el, index) => (
            <di>
              
              <Tache tache={el}   /> <br></br> <br></br>
            </di>
          ))}
        </div>
      </Row>
    </>
  );
}

export default ListeTache;
