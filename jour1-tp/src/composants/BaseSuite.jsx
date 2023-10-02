function BaseSuite() {
    // boucles 
    // conditions 
    const fleurs = ["jasmin", "rose", "tulipe", "lilas"] ;
    // je veux afficher dans le composant chaque fleur 

    return ( 
        <div>
        <ul>
            <li>{fleurs[0] }</li>
            <li>{fleurs[1] }</li>
            <li>{fleurs[2] }</li>
            <li>{fleurs[3] }</li>
            { /* utiliser une boucle for en js => propriété des tableaux javascript  .map() pour jsx // boucle sur une tableau ajouter autour de chaque élément élément un <li> </li> */  }
            { fleurs.map(function(item , key){
                return <li key={key}>{ item }</li>
            })  }
        </ul>
            <h2>les conditions en jsx</h2>
            { /** if en js classique 
             *  l'opérateur ternaire (condition) ? "si true" : "si false"
             *                       (condition) && "si c'est true"   
             *    */ }
            { /* commentaire en jsx  */ }

            { ( 2 < 1) ? 
                    <p>la condition est vraie</p> : 
                    <p>la condition est fausse</p> 
            }
            {
                /**
                 * if(2 < 1){
                 *  return <p>la condition est vraie</p> 
                 * }else {
                 *  return <p>la condition est fausse</p> 
                 * }
                 * 
                 */
            }

            { 10 < 5  &&  <p>la condition2 est vraie</p> }
            {/**
             * if( 10 < 5 ){
             *  return <p>la condition2 est vraie</p>
             * }
             * 
             */}

        </div>
     );
}


export default BaseSuite;

// cas pratique créer le composant Exo3 
// dans ce composant créer variable formation
// [ { nom : "JS", duree : 5 } , { nom : "angular" , duree : 2 } , {  nom : "react" , duree : 15 }]

// dans la partie vue du composant afficher toutes les formations

/* <ul>
    <li style={{ color : blue}}>JS durée 5 heures</li>
    <li style={{ color : blue}}>angular durée 2 heures</li>
    <li style={{ color : red}}>react durée 15 heures</li> 
</ul> */

// // si la durée > 10 réaliser une mise en forme simple
