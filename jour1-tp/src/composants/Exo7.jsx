// ffc
import {useState , useEffect} from "react";

function Exo7() {

    const [cocktails , setCocktails] = useState([])
    // cocktails => [] par défaut
    // cocktails => [{}, {}] suite à une requête ajax
    // pour modifier l'état cocktails il faut 
    // setCocktails([{}, {}])

    const [recherche, setRecherche] = useState("");
    // la valeur que l'on va saisir dans le formulaire 
    //  recherche = ""
    //  rechercher = "vodka" suite à la soumission du formulaire 
    // cliquer sur le bouton de recherche 

    // lien entre cocktails et recherche

    useEffect( function(){
        if(recherche === ""){
            // au lancement de l'application
            fetch("https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita")
                .then(function(reponse){ return reponse.json()})
                .then(function(data){ setCocktails(data.drinks)});
        }else {
            // suite à la soumission du formulaire 
            fetch("https://www.thecocktaildb.com/api/json/v1/1/search.php?s="+ recherche)
                .then(function(reponse){ return reponse.json()})
                .then(function(data){ setCocktails(data.drinks)});
        }
     }, [recherche])

     const handleSubmit = function(e){
        // bloquer le recherche automatique de la page
        e.preventDefault();
        const dataFormulaire = new FormData(e.target); // FormData 
        setRecherche(dataFormulaire.get("recherche"));
        // récupérer le texte écrit dans le champ de recherche du formulaire 
        // modifie l'état recherche
     }

    return (  <div>
        <h2>rechercher une cocktail</h2>
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder="rechercher un cocktails" name="recherche" /> 
            <input type="submit" value="rechercher" />
        </form>
        <h2>liste des résultats</h2>
        <ul>
            { cocktails.map(function(item, key){
                return <li key={key}>{item.strDrink}  {/** dans la réponse de l'API */}
                    <img src={item.strDrinkThumb} alt="" style={{ width : "200px" }} />
                </li>
            }) }
        </ul>
    </div>  );
}

export default Exo7;