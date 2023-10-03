import { Button , Text , View} from "react-native";
import { useState } from "react"

function Exo4() {
    const [etat, setEtat] = useState(false)
    const handleOnPress = () => {
        setEtat(!etat)
    }
    return ( <View>
        <Button  title="modifier etat" onPress={handleOnPress}/>
        { etat ? <Text>Fin de journée</Text> : <Text>début de journée</Text> }
    </View> );
}

export default Exo4;

// cas pratique 
// créer le composant Exo5

// dans ce composant vous allez utiliser 
// useState et useEffect 
// effectuer une requête ajax vers l'API suivante via fetch
// https://restcountries.com/v3.1/all
// en utilisant useState et useEffect remplir le state 
// pays dans une FlatList dans la vue du composant 

