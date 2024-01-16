import React from "react";
import "./index.css";
import { useState } from "react";
import { api } from "../../api/api";

function Herosection() {
  const [tgcode, setTgcode] = useState();

  const handleChange = async (e) => {
    const tgval = "ABA101";
    const data = await api.get(`tgcodes/?tgcode={tgval}`);
    console.log(console.log);
    if (e.target.value.length == 6) {
    }
    setTgcode(e.target.value);
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
          <form className="tgform" action="">
            <div className="intro-text-container"></div>
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
                  onChange={(e) => handleChange(e)}
                />
              </div>
            </div>
            <p className="missing-text">
              Fehlt ein Typenschein? Dann tragen sie ihn doch bitte ein, damit
              auch andere davon profitieren
            </p>
          </form>
        </div>
      </div>
    </>
  );
}

export default Herosection;
