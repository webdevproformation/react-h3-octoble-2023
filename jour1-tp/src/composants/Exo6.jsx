import {useState, useEffect } from "react"

function Exo6() {
    const [villes, setVilles ] = useState([]);

    useEffect( function(){
        fetch("https://geo.api.gouv.fr/departements/92/communes")
            .then(function(reponse){ return reponse.json() })
            .then(function(data){ setVilles(data)})
    } , [])

    return ( 
        <ol>
            { villes.map(function(item, key){
                return <li key={key}>
                    {item.nom} - cp : {item.code} - habitant : { new Intl.NumberFormat("fr-FR").format(item.population)}
                </li>
            }) }
        </ol>
     );
}

export default Exo6;