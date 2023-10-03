import { Text, 
        View , 
        Image , 
        TextInput , 
        Button ,
        StyleSheet} 
from "react-native"

function Exo3() {
    return ( <View>
        <Text>Exo 3</Text>
        <Image source={{ 
            uri : "https://via.placeholder.com/200x100",
            width: 200,
            height : 100
        }} 
        style={style.espace}
        />
        <TextInput placeholder="info" style={[style.espace, style.input]}  />
        <View style={style.espace}>
            <Button onPress={function(){}} title="Envoyer" />
        </View>
    </View> );
}

export default Exo3;

const style = StyleSheet.create({ 
    espace : {
        marginVertical : 20
    }, 
    input : {
        borderWidth : 2, borderColor : 'black',
        paddingVertical : 5, paddingHorizontal : 10,
        borderRadius : 5 ,
        marginBottom : 10 , width : 200
    }
})