import { useState } from "react";
import "./left.css";

function Composant1(props) {
  const { etatBouton, setEtatBouton, texte, setTexte } = props;

  const handleButtonCLick = (e) => {
    setEtatBouton(!etatBouton);
    setTexte("");
  };

  const handleTextareaChange = (e) => {
    setTexte(e.target.value);
  };

  return (
    <div className="composant1">
      <button onClick={handleButtonCLick} name="boutonONOFF" className="power">
        Power
      </button>

      <textarea
        name="texteUtilisateur"
        value={etatBouton ? texte : ""}
        onChange={handleTextareaChange}
        placeholder={etatBouton ? "Votre texte ici" : "Moniteur éteint"}
      ></textarea>
    </div>
  );
}

export default Composant1;
