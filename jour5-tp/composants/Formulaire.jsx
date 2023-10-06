import { Button, StyleSheet, Text, TextInput, View , Dimensions } from 'react-native'
import React , {useContext , useState} from 'react'
import { ProfilContext } from "../context/profilContext"

const Formulaire = () => {
    const { login , logout, profil } = useContext(ProfilContext)
    const [ loggin, setLoggin ]   = useState("");
    const [ password, setPassword ]   = useState("");
    const handleSubmit = function(){
        const identifiants = {loggin , password}
        const verif = login(identifiants);
        if(verif){
            setLoggin("");
            setPassword("");
        }
    }
  return (
    <View>
        { !profil.isLogged ?
            <View style={styles.box}>  
                <Text style={styles.h1}>Formulaire de connexion</Text>
                <TextInput placeholder='login' style={styles.input} value={loggin} onChangeText={function(text){ setLoggin(text)}} />
                <TextInput placeholder='password' style={styles.input} value={password} onChangeText={function(text){ setPassword(text)}}/>
                <Button onPress={handleSubmit} title="connexion" />
            </View>
        :
            <View style={styles.box}>  
                <Button onPress={logout} title="deconnexion" /> 
            </View>
        }
      
    </View>
  )
}

export default Formulaire

const styles = StyleSheet.create({
    h1 : {
        textAlign : "center",
        fontSize : 20,
        fontWeight : "bold"
    },
    box : {
        padding : 20
    },
    input : {
        width: Dimensions.get("screen").width - 20,
        borderColor : "black",
        borderWidth : 1, 
        padding : 5,
        marginVertical : 10,
    }
})