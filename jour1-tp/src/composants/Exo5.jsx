import { useEffect , useState } from "react";
function Exo5() {
    const [pays, setPays] = useState([])
    useEffect( function(){
        fetch("https://restcountries.com/v3.1/all")
            .then(function(reponse){ return reponse.json() })
            .then(function(data){ setPays(data) })
    } , [] ) // effectuer le contenu de la fonction en 1er paramètre du useEffect 1 seul au moment du chargement du composant
    return ( <ol>
        {pays.map(function(item, key){
            return <li key={key}>{item.name.common} - {item.flag}</li>
        })}
    </ol> );
}

export default Exo5;


// créer le composant Exo6 
// effectuer une requête ajax appeler l'adresse suivants 'https://geo.api.gouv.fr/departements/92/communes'

// afficher à l'écran l'ensemble des villes 

// pour chaque ville afficher = nom ville / code postal / population (nombre habitant)
// https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat