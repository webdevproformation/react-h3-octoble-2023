import { View , ActivityIndicator , Switch , Button , Alert} from "react-native"


function AutreComposant() {
    const myAlert = () => {
        Alert.alert("titre en haut" , "message" , [
            { text : "annuler", onPress : function(){}},
            { text : "valider", onPress : function(){}}
        ])
    }
    return ( 
        <View>
            <ActivityIndicator size="large" color="red"/>
            <ActivityIndicator size="small" color="blue"/>
            <Switch value={false}/>
            <Button title="attention" onPress={function(){
                alert("attention j'ai cliqué")
            }} />
            <Button title="attention 2" onPress={myAlert} color="red" />
        </View>
     );
}

export default AutreComposant;