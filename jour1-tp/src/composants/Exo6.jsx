import {useState, useEffect } from "react"

function Exo6() {
    const [villes, setVilles ] = useState([]);
    const [departement, setDepartement] = useState("01")

    useEffect( function(){
        fetch(`https://geo.api.gouv.fr/departements/${departement}/communes`)
            .then(function(reponse){ return reponse.json() })
            .then(function(data){ setVilles(data)})
    } , [departement])
    const handleSubmit = (e) => {
        e.preventDefault();
        const data = new FormData(e.target);
        const departement = data.get("departement")
        if(departement.length > 0){
            setDepartement(departement)
        }
    }
    return ( 
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" name="departement"/>
                <input type="submit" />
            </form>
            <ol>
                { villes.map(function(item, key){
                    return <li key={key}>
                        {item.nom} - cp : {item.code} - habitant : { new Intl.NumberFormat("fr-FR").format(item.population)}
                    </li>
                }) }
            </ol>
        </div>
     );
}

export default Exo6;