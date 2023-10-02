import Bouton from "./composants/Bouton"; 
import Exo1 from "./composants/Exo1"
// balise qui permet d'emballer les composants de App 
import { Fragment } from "react"

function App(){
  // Bouton()
  return <>
    {/** un commentaire dans du jsx  */}
    <Exo1 />
    <Bouton />
  </>
}

export default App ;

// cas pratique => 
// créer une composant Exo1
// ce composant retourne une balise <h1>
// qui contient le texte : bonjour

// une fois le composant créé 
// exécuter dans le composant App 