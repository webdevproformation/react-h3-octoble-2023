import { Text , View , Button } from "react-native"
import Recherche from "./Recherche"
function Accueil({navigation}) {
    const handleClick = function(){
        navigation.navigate("profil") // la valeur de name à utiliser 
    }

    const handleClickConnexion = function(){
        navigation.navigate("login") // la valeur de name à utiliser 
    }
    
    return ( <View style={{ flex : 1 , justifyContent: "center" , alignItems : "center" }}>
        <Text>Open up App.js to start working on your app!</Text>
        <Text >Accueil</Text>
        <Button title="voir le profil" onPress={handleClick} />
        <Button title="se connecter" onPress={handleClickConnexion} />
        <Recherche navigation={navigation} />
    </View> );
}
export default Accueil;

// cas pratique => créer un composant Login 
// dans ce composant créer un formulaire avec deux input 
// login et un password 
// ce formulaire est accessible de depuis l'écran d'Accueil via un bouton "Connexion"
// 