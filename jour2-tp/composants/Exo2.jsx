import { Button , TextInput , View , StyleSheet } from "react-native"

function Exo2() {
    return ( <View>
        <TextInput placeholder="login" style={style.input}/>
        <TextInput placeholder="password" style={style.input} />
        <Button onPress={function(){}} title="soumettre" />
    </View> );
}
export default Exo2;
const style = StyleSheet.create({
    input : {
        borderWidth : 2, borderBlockColor : 'black',
        paddingVertical : 5, paddingHorizontal : 10,
        borderRadius : 5 ,
        marginBottom : 10 , width : 200
    }
})