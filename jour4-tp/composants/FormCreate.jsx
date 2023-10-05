// rnfes
// extension ajouter en plus l'extension 
import { StyleSheet, Text, View , Button , TextInput , FlatList } from 'react-native'
import React , {useState} from 'react'
import { schemaEtudiant } from "../verif/etudiant"
import db from "../config"
import { collection , addDoc , getDocs , query, where } from "firebase/firestore"

 const FormCreate =  ({navigation}) => {
    const [nom, setNom]= useState("");
    const [age, setAge]= useState("0");
    const [email, setEmail]= useState("");
    const [erreurs, setErreurs]= useState([]);
    const handleSubmit = async () => {
        console.log(nom , age , email); 
        const etudiant = { nom , age , email }
        const { error } = schemaEtudiant.validate( etudiant , {abortEarly : false}); 
        // effectuer les 11 verifications 
        console.log(error); 
        setErreurs([]);
        if(!error){ // si erreur est undefined 
             // ajouter dans Firebase 
             // ajouter une nouvelle ligne dans la table etudiant

             // vérifier si on a un utilisateur qui a déjà le même email que celui saisit
            const q = query(collection(db, "etudiant"), where("email", "==", etudiant.email));

            const querySnapshot =  await getDocs(q)
            const test = [] ;

            querySnapshot.forEach((doc) => {
                test.push(doc.id)
                console.log(doc.id, " => ", doc.data());
            })
            
            if(test.length > 0){
                setErreurs(["attention email est déjà utilisé"])
                return ;
            }   
             
            // ici on va pouvoir effecter l'ajout
            await addDoc(collection(db, "etudiant") , etudiant) ;

            setNom("")
            setAge("0")
            setEmail("")
            alert("le profil utilisateur est bien créé en base de donnée")
             
        }else {
            const tableauErreurs = error.details.map(function(item){ return item.message });
            setErreurs(tableauErreurs);
        }

    }
  return (
    <View>
      <Text>Créer un nouveau profil étudiant</Text>
      <TextInput placeholder="nom" onChangeText={function(text){ setNom(text) ; setErreurs([]);}} value={nom} style={styles.input} />
      <TextInput placeholder="age" onChangeText={function(text){ setAge(text) ; setErreurs([]);}} value={age} style={styles.input} keyboardType="numeric"/>
      <TextInput placeholder="email" onChangeText={function(text){ setEmail(text) ; setErreurs([]);}} value={email} style={styles.input}/>
      <Button title="créer" onPress={handleSubmit} />
      <FlatList 
        data={erreurs}
        renderItem={function({item}){ return <Text>{item}</Text> }}
      />
      <View style={{ marginTop : 10 }}>
      <Button onPress={function(){
            navigation.goBack()
        }} title="retour à l'accueil" color="purple"/>
      </View>
    </View>
  )
}
export default FormCreate

const styles = StyleSheet.create({
    input : {
        borderColor : "black" , padding : 10 , borderWidth : 2 , marginVertical : 10
    }
})


// ajouter le module permettant d'ajouter la nvigation de type Stack 
// npm install @react-navigation/native @react-navigation/native-stack
// npx expo install react-native-screens react-native-safe-area-context
// ajouter dans l'écran d'Accueil un lien qui va permettre d'afficher le formulaire que l'on vient de créer 


// créer