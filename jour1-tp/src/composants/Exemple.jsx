import {useState, useEffect} from "react"

function Exemple() {

    const [etudiants, setEtudiants] = useState({});

        useEffect( function(){
            setTimeout( function(){
                console.log("useeffect exécuté")
                const liste = { nom : "alain" , age : 10 };
                setEtudiants(liste); 
            } , 1000)
        }, [etudiants.nom]) ;


    return ( null );
}

export default Exemple;