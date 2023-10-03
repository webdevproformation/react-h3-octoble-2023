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