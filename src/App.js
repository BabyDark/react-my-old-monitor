import { useState } from "react";
import "./assets/css/App.css";
import Composant1 from "./components/left/left";
import Composant2 from "./components/right/right";

function App() {
  const [etatBouton, setEtatBouton] = useState(false);
  const [texte, setTexte] = useState("");

  return (
    <div id="app-container">
      <h1 className="papy">Le vieux moniteur de papy !</h1><br/>
      <div className="container-row">

        <div className="half-screen left">
          <Composant1
            etatBouton={etatBouton}
            setEtatBouton={setEtatBouton}
            texte={texte}
            setTexte={setTexte}
          />
        </div>

        <div className="half-screen right">
          <Composant2 
            etatBouton={etatBouton} 
            texte={texte} 
          />
        </div>

      </div>
    </div>
  );
}

export default App;