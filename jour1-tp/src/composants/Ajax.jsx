import { useEffect } from "react";

function Ajax() {

    // au moment où le composant Ajax est affiché à l'écran
    // requete vers une API 
    // https://jsonplaceholder.typicode.com/posts

    useEffect( function(){
        fetch("https://jsonplaceholder.typicode.com/posts")
            .then(function(info){ 
                console.log(info)
                return info.json()}
            )
            .then(data => console.log(data))
    } , [] )

    return ( null  );
}

export default Ajax;

