import { View , TextInput , StyleSheet , Button , Text } from "react-native"
import style from "../style";
import { useState } from "react"


function Recherche({navigation}) {
    const [pays, setPays] = useState("")
    const [erreur, setErreur] = useState(false)

    const handleChange = (text) => {
        setPays(text);
        setErreur( false );
    }

    const handleSubmit = () => {
        if(pays !== ""){
            navigation.navigate("pays" , { pays });
            return ;
        }
        setErreur( true );
    }
    return ( 
        <View>
            <TextInput 
            placeholder="rechercher une pays" 
            style={style.input} 
            value={pays} 
            onChangeText={handleChange} />
            <Button title={"rechercher"} onPress={handleSubmit} />
            { erreur && <Text style={styleLocal.warning}> veuillez compléter {"\n"} le champ avant de soumettre</Text>}
        </View>
     );
}

export default Recherche;

const styleLocal = StyleSheet.create({
    warning : {
        color : "orange",
        textAlign : "center",
        marginVertical : 10
    }
})