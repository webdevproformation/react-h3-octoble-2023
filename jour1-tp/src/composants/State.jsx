import { useState } from "react" // useState spécifique à React
// donc il faut l'importer

function State() {
    const [ nb , setNb  ] = useState( 0 )
    // useState retourne toujours un tableau de deux valeurs 
    // getter => nbv=> AFFICHER LA VALEUR DE L ETAT
    // setter => setNb  => modifier la valeur de l'état
    function augmenter (){
           setNb( nb + 1  ) ; // utilise le setter pour faire augmenter de + 1 l'état du notre compten
    }

    function diminuer(){
        setNb(nb - 1)
    }
    
    return ( <div>
        <button onClick={ diminuer }>diminuer - 1</button>
        <button onClick={ augmenter }>augmenter de + 1</button>
        <span>{ nb }</span>
    </div> );
}

export default State;
// cas pratique // ajouter un nouveau bouton diminuer 
// si vous cliquez dessus faire diminuer de -1 la valeur de l'état