import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import addTache from "../redux/action";
import "./style.css";

function AjouterTache() {
  const [description, setDescription] = useState("");
  const [isDone, setIsDone] = useState("");

  const dispatch = useDispatch();

  const ajouter = () => {
    if (description != "" && isDone != "") {
      let tache = {
        id: Date.now(),
        description,
        isDone,
      };
      dispatch(addTache(tache));
    }
    setDescription("");
    setIsDone("");
  };

  return (
    <div className="formajout">
      <form class="row g-3">
        <div class="col-md-6">
          <label for="inputCity" class="form-label">
            nouvau tache
          </label>
          <input
            type="text"
            class="form-control"
            id="inputCity"
            placeholder="decris le tache"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>
        <div class="col-md-4">
          <label for="inputState" class="form-label">
            l'etat{" "}
          </label>
          <select
            id="inputState"
            class="form-select"
            value={isDone}
            onChange={(e) => setIsDone(e.target.value)}
          >
            <option selected>...</option>
            <option>non</option>
            <option>oui</option>
          </select>
        </div>


      </form>
     
      
       <div className="btnajout"> <button   type="button" class="btn btn-dark"  onClick={() => ajouter()}>
          Ajout
        </button></div>
      
    </div>
  );
}

export default AjouterTache;
