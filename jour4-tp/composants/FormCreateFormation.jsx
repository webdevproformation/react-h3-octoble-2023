import { StyleSheet, Text, View , Button , TextInput , FlatList } from 'react-native'
import React , {useState} from 'react'
import db from "../config"
import {addDoc , collection } from "firebase/firestore"
import { schemaFormation }  from "../verif/formation"

const FormCreateFormation = ({navigation}) => {
    const [nom, setNom]= useState("premier formation");
    const [description, setDescription]= useState("Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestiae cupiditate corporis dignissimos maxime commodi eveniet esse numquam provident. ");

    const today = new Date();
    const dt = today.getDate() + '/' + (today.getMonth() + 1) + '/' + today.getFullYear();

    const [date_debut, setDateDebut]= useState(dt);
    const [erreurs, setErreurs]= useState([]);

    const handleSubmit = function(){

        const arrDt = date_debut.split("/")

        const formation = {
            nom , description , date_debut  : new Date( arrDt[2] , arrDt[1] - 1 , arrDt[0] )
        }

        const {error} = schemaFormation.validate(formation)

        if(!error){
            addDoc(collection(db, "formation") , formation)
            .then(function(){ 
             console.log("formation ajoutée")
             navigation.push("accueil")
            }) 
        };
       
    }
  return (
    <View>
      <Text>Créer une nouvelle formation</Text>
      <TextInput placeholder="nom" onChangeText={function(text){ setNom(text) ; setErreurs([]);}} value={nom} style={styles.input} />
      <TextInput placeholder="description" onChangeText={function(text){ setDescription(text) ; setErreurs([]);}} value={description} style={styles.input} multiline={true} numberOfLines={3} />
      <TextInput placeholder="JJ/MM/AAAA" onChangeText={function(text){ setDateDebut(text) ; setErreurs([]);}} value={date_debut} style={styles.input} />
      <Button title="créer" onPress={handleSubmit} />
      <FlatList 
        data={erreurs}
        renderItem={function({item}){ return <Text>{item}</Text> }}
      />
    </View>
  )
}

export default FormCreateFormation

const styles = StyleSheet.create({
    input : {
        borderColor : "black" , padding : 10 , borderWidth : 2 , marginVertical : 10
    }
})