function Event() {

    const handleClick = () => alert("je suis la deuxième méthode" );

    const addition = ( a, b ) => alert(a + b); 
    

    return ( <div>
        <button onClick={ function(){} }> btn </button>
        <button onClick={ () => alert("bonjour")  }> btn </button>
        <button onClick={  handleClick  } > btn 3 </button>
        {/** ne pas mettre de () après handleClick dans le jsx 
         * car on veut que la fonction soit exécutée lors du clique sur le bouton  */ }
         <button onClick={ () => addition( 1, 2 )}>dernier bouton </button>
         <button onClick={ () => addition( 4, 5 )}>autre bouton </button>
         <button onClick={ addition} >autre bouton erreur </button>
    </div>
     );
}

export default Event;

// function(){ 
//    return "2"
//}

// () => { return "2" }
// () =>  "2" 

// créer le composant Exo4 
// ce composant contient la variable suivante 
/**
const formations = [ 
    { nom : "JS", duree : 5 , sommaire : ["decouverte", installation] } , 
    { nom : "angular" , duree : 2 , sommaire : ["init" , "deploiement"] } , 
    {  nom : "react" , duree : 15 , sommaire : ["dev" , "prod"] }
];

    dans la partie vue du composant afficher le jsx suivant 
    <h2>JS</h2>
    <p>durée : 5 heures</p>
    <ul>
        <li>decouverte</li>
        <li>installation</li>
    </ul>
    <button>lire la suite ...</button> => cliquer sur le bouton afficher le texte suivant la console : "JS"
    le faire pour chaque matière

 * 
 */