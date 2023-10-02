import Bouton from "./composants/Bouton"; 
import Exo1 from "./composants/Exo1"
import Base from "./composants/Base"
// balise qui permet d'emballer les composants de App 
import { Fragment } from "react"
import Exo2 from "./composants/Exo2";
import BaseSuite from "./composants/BaseSuite";
import Exo3 from "./composants/Exo3";
import Event from "./composants/Event";
import Exo4 from "./composants/Exo4";

function App(){
  // Bouton()
  return <>
    {/** un commentaire dans du jsx  */}
    <Exo1 />
    <Bouton />
    <Base />
    <Exo2 />
    <BaseSuite />
    <Exo3 />
    <Event />
    <Exo4 />
  </>
}

// 

export default App ;

// cas pratique => 
// créer une composant Exo1
// ce composant retourne une balise <h1>
// qui contient le texte : bonjour

// une fois le composant créé 
// exécuter dans le composant App 