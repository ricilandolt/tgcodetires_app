import React from "react";
import "./index.css";
import { useState } from "react";
import { api } from "../../api/api";
import RowElement from "../RowElement";

function Herosection() {
  const [tgcode, setTgcode] = useState();
  const [fronttires, setFronttires] = useState([]);
  const [rims, setRims] = useState([]);
  const [reartires, setReartires] = useState([]);

  const handleChange = async (e) => {
    setTgcode(e.target.value);
    try {
      if (e.target.value.length == 6) {
        const tgval = e.target.value;
        const resp = await api.get(`/tgcodes?tgcode=${tgval}`);
        const data = resp.data[0];
        const { tires, rims } = data;
        setFronttires([...tires.filter((obj) => obj.axis == 2)]);
        setReartires([...tires.filter((obj) => obj.axis == 1)]);
        setRims(rims);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div className="hero-container">
        <div className="left-container">
          <h1 className="maintitle">
            Nicht am Rad drehen, Typenschein eingeben!
          </h1>

          <p className="left-content">
            Finde passende Reifen- und Felgendimensionen für dein Fahrzeug
            anhand des Typenscheincodes
          </p>
        </div>

        <div className="right-container">
          <div className="background">
            {[...Array(100).keys()].map((el) => (
              <RowElement key={"Row" + el} index={el}></RowElement>
            ))}
          </div>

          <form className="tgform" action="">
            <div className="input-container">
              <label className="tgcodelabel" htmlFor="tgcode">
                Typenschein
              </label>

              <div className="search-input-container">
                <i className="fas fa-search"></i>
                <input
                  className="tgcodeinput"
                  id="tgcode"
                  type="text"
                  value={tgcode}
                  autoComplete="off"
                  onChange={(e) => handleChange(e)}
                />
              </div>
            </div>

            <a
              href="https://tgtires-api-88167eb20fba.herokuapp.com/docs/"
              className="missing-text-container"
            >
              <span className="missing-text">
                Sie sind Entwickler? Nutzen Sie unsere API
              </span>
            </a>
          </form>
          <div className="tires-rims-container">
            {fronttires.length > 0 && (
              <div className="tires-rims-items">
                <div className="tire-rims-header">Reifen vorne</div>
                {fronttires.map((obj) => (
                  <p key={obj.id} className="tiredimension">
                    {obj.tiredimension}
                  </p>
                ))}
              </div>
            )}
            {reartires.length > 0 && (
              <div className="tires-rims-items">
                <div className="tire-rims-header">Reifen hinten</div>
                {reartires.map((obj) => (
                  <p key={obj.id} className="tiredimension">
                    {obj.tiredimension}
                  </p>
                ))}
              </div>
            )}
            {rims.length > 0 && (
              <div className="tires-rims-items">
                <div className="tire-rims-header">Felgen</div>
                {rims.map((obj) => (
                  <p key={obj.id} className="tiredimension">
                    {obj.rimdimenesion}
                  </p>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default Herosection;
