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