import "./right.css";
import Image from "./../../assets/img/monitor.png";

function Composant2(props) {
  const { etatBouton, texte } = props;

  return (
    <div className="right">
      <div className="monitor-font">
        <p>{etatBouton ? texte + " _" : ""}</p>
      </div>
      <div>
        <img src={Image} className="img" />
      </div>
    </div>
  );
}

export default Composant2;
