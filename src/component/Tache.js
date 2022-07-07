import React, { useState } from "react"
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import './style.css'
import {useDispatch} from 'react-redux'
import { modifierTache } from "../redux/action";



function Tache({tache}) {

  const [idtachemodifier,setIdtachemodifier]=useState(-1)
  const [objtachemodf,setObjtachemodf]=useState({id:10,description:'',isDone:''})
  const dispatch = useDispatch()


  const declencheId =(e)=>{
   setIdtachemodifier(e)
   setObjtachemodf({ ...objtachemodf, id:e });

  }
 

  const remplir= (e)=>{
    setObjtachemodf({ ...objtachemodf, [e.target.name]: e.target.value});
  }
  
  const confirmemodif = (e)=>{
    if (objtachemodf.description==''){
      alert('saisir une nv description')
    } else if (objtachemodf.isDone==''){
      alert('determiner letat de tache')
    }
else{

     dispatch(modifierTache(objtachemodf))
      anulmodif()}
  }

  const anulmodif =()=>{
    setIdtachemodifier(-1)
  }

  
  return (
   <div>
    {(tache.id==idtachemodifier)? <Card style={{ width: '100%' }}>
    <Card.Header><input name="id" style={{width:'50%', border:'none'}} value={tache.id} onChange={remplir} /></Card.Header>
    <ListGroup variant="flush">
      
      <ListGroup.Item><p>{tache.description}</p><input name="description" style={{width:'100%'}} type="texte" onChange={remplir} /></ListGroup.Item>
     { tache.isDone =='non'?
      <ListGroup.Item style={{backgroundColor:'red'}}><select name="isDone" onChange={remplir} ><option >****</option><option >oui</option> <option>non</option>
      </select></ListGroup.Item> : 
      <ListGroup.Item style={{backgroundColor:'green'}}><select name="isDone" onChange={remplir} ><option >****</option><option >oui</option> <option>non</option>
      </select></ListGroup.Item>}
    </ListGroup>
    <div className="btnajout">
     <button   type="button" class="btn btn-dark"  onClick={() =>declencheId(tache.id) }>
    Modifier
  </button>
  <button  type="button" class="btn btn-dark"  onClick={() =>anulmodif() }>
  annuler
</button><button   type="button" class="btn btn-dark"  onClick={() =>confirmemodif(tache.id)}>
confirmer
</button>
  </div>

  </Card>:
  <Card style={{ width: '100%' }}>
    <Card.Header>task : {tache.id}</Card.Header>
    <ListGroup variant="flush">
      
      <ListGroup.Item>{tache.description}</ListGroup.Item>
     { tache.isDone =='non'?
      <ListGroup.Item style={{backgroundColor:'red'}}></ListGroup.Item> : 
      <ListGroup.Item style={{backgroundColor:'green'}}></ListGroup.Item>}
    </ListGroup>
    <div className="btnajout">
     <button   type="button" class="btn btn-dark"  onClick={() =>declencheId(tache.id) }>
    Modifier
  </button>
 
  </div>

  </Card>
  }
   
   
    </div>

  );
}

export default Tache;
