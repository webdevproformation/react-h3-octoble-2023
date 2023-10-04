import { View , TextInput , StyleSheet } from "react-native"

function Login() {
    return ( <View style={{ alignItems: "center" }}>
        <TextInput placeholder="login" style={style.input} />
        <TextInput placeholder="password" secureTextEntry={true} style={style.input} />

    </View> );
}

export default Login;

const style = StyleSheet.create({ 
    input : {
        borderWidth : 2, borderColor : 'black',
        paddingVertical : 5, paddingHorizontal : 10,
        borderRadius : 5 ,
        marginBottom : 10 , width : 200 ,
        marginVertical : 20
    }
})

// cas pratique 
// un commentaire !!!
// créer un nouveau composant qui s'appelle Dashboard 
// se composant est accessible via un bouton qui est disponible dans le composant Login 
// lors du clique sur le bouton login => envoyer les informations saisies vers la nouvelle page 
// à afficher dans le composant Dashboard 

// navigation.navigate('dashboard', { identifiants: { login : '', password : '' } }) ;

// dans la page Dashboard vous utilisez le paramètre route.params