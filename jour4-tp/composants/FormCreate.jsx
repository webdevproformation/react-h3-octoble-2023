// rnfes
// extension ajouter en plus l'extension 
import { StyleSheet, Text, View , Button , TextInput , FlatList } from 'react-native'
import React , {useState} from 'react'
import { schemaEtudiant } from "../verif/etudiant"
import db from "../config"
import { collection , addDoc } from "firebase/firestore"

const FormCreate = () => {
    const [nom, setNom]= useState("");
    const [age, setAge]= useState("0");
    const [email, setEmail]= useState("");
    const [erreurs, setErreurs]= useState([]);
    const handleSubmit = () => {
        console.log(nom , age , email); 
        const etudiant = { nom , age , email }
        const { error } = schemaEtudiant.validate( etudiant , {abortEarly : false}); 
        // effectuer les 11 verifications 
        console.log(error); 
        if(!error){ // si erreur est undefined 
             // ajouter dans Firebase 
             // ajouter une nouvelle ligne dans la table etudiant
             addDoc(collection(db, "etudiant") , etudiant).then(function(reponse){
                setNom("")
                setAge("0")
                setEmail("")
                alert("le profil utilisateur est bien créé en base de donnée")
             })
        }else {
            console.log(error)
        }

    }
  return (
    <View>
      <Text>Créer un nouveau profil étudiant</Text>
      <TextInput placeholder="nom" onChangeText={function(text){ setNom(text)}} value={nom} style={styles.input} />
      <TextInput placeholder="age" onChangeText={function(text){ setAge(text)}} value={age} style={styles.input} keyboardType="numeric"/>
      <TextInput placeholder="email" onChangeText={function(text){ setEmail(text)}} value={email} style={styles.input}/>
      <Button title="créer" onPress={handleSubmit} />
      <FlatList 
        data={erreurs}
        renderItem={function({item}){ return <Text>{item}</Text> }}
      />
    </View>
  )
}
export default FormCreate
const styles = StyleSheet.create({
    input : {
        borderColor : "black" , padding : 10 , borderWidth : 2 , marginVertical : 10
    }
})