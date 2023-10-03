import { Text , TouchableHighlight , StyleSheet } from "react-native"
function MyBouton() {
    return ( <TouchableHighlight 
            onPress={function(){}} 
            style={style.btn}
            >
                <Text style={style.text}>
                    je suis un bouton
                </Text>
    </TouchableHighlight> );
}
export default MyBouton;
const style = StyleSheet.create({
    btn :  { backgroundColor : 'red' , paddingVertical : 30 ,  paddingHorizontal : 40 , borderRadius : 5 , borderWidth : 2 , borderBlockColor : "black" } ,
    text : { fontSize : 20 , color : 'white' }
})

// cas pratique créer le composant Exo2
// créer un formulaire contenant 2 TextInput
// login
// password 
// un bouton vert à la suite de ces deux input 
