import { View , Text } from "react-native"

function Dashboard({ route }) {
    return ( <View>
        <Text>Bonjour {route.params.identifiants.login} </Text>
    </View>);
}

export default Dashboard;

// à partir de la page d'accueil 
// input de recherche dans lequel l'utilisateur peut saisir un pays 
// créer un bouton qui mène vers le composant Pays
// arriver sur le composant Pays
// si l'utilisateur ne met pas d'information dans le formulaire => bloquer et lui expliquer 
// dans ce composant vous allez effectuer une requête ajax (fetch)
// vers l'API suivante : 
// https://restcountries.com/v3.1/name/
// si le pays n'existe pas => lui dire que le pays n'est pas dans la base de données 
// afficher les informations du pays recherché dans la composant Pays 
// nom du pays
// sa population
// son drapeau
// sa capitale 