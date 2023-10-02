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
import Liste from "./composants/Liste";
import Article from "./composants/Article";
import State from "./composants/State";

function App(){
  // Bouton()
  return <>
    <State />
    {/** un commentaire dans du jsx  */}
    <Exo1 />
    <Bouton />
    <Base />
    <Exo2 />
    <BaseSuite />
    <Exo3 />
    <Event />
    <Exo4 />
    <Liste />
    <Article />
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

// créer un premier composant Article 
// ce composant contient les données suivantes 
// une variable data qui est un objet
// {titre : "Article 1" , contenu : "lorem ipsum sur 30 mots" , auteur : "Victor Hugo" , commentaires : [ 
/**
 { contenu : "super article", date : "01/01/2023"  }
 { contenu : "excellente nouvelle", date : "01/01/2023"  }
 { contenu : "article à finir", date : "01/01/2023"  }
 */

//   ] }

// dans la vue du composant <h1>titre</h1>
// dans la vue du composant <p> avec le lorem</p>
// dans la vue du composant <p> nom auteur : Victor hugo</p>
// pour chaque commentaire afficher une composant Commentaire

// le composant Commentaire 
// <p>texte : super article / publié le 01/01/2023 </p>
// <p>texte : excellente nouvelle / publié le 01/01/2023 </p>
// <p>texte : article à finir / publié le 01/01/2023 </p>
