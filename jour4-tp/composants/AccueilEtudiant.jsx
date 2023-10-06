import { StyleSheet, Text, View , Button , FlatList } from 'react-native'
import React , { useState, useEffect } from 'react'
import db from "../config" ;
import { getDocs , collection , doc , deleteDoc } from "firebase/firestore"

const AccueilEtudiant = ({navigation}) => {

    const [etudiants , setEtudiants] = useState([]); 
    const [updateList , setUpdateList] = useState(false); 

    useEffect( function(){ 

        // ipconfig pour trouvez la bonne ip 
        /* fetch("http://192.168.33.1:9999").then(function(reponse){
            return reponse.json();
        }).then(function(data){ console.log(data)})
 */
        getDocs(collection(db, "etudiant"))
        .then(function(snapShot){
            const data = []; 
            snapShot.docs.map(function(doc){
                data.push({...doc.data() , id : doc.id})
            })
           setEtudiants(data);
        })

    } , [updateList])

    const supprimer = (id) => {
        // fetch(".../id", {DELETE}).then(reponse)
        deleteDoc(doc(db , "etudiant" , id)).then(function(){
            setUpdateList(!updateList);
        });
    }
  return (
    <View>
      <Button onPress={function(){
        navigation.navigate("create-etudiant")
      }} title="ajouter un profil user" />
      <FlatList 
        data={etudiants}
        renderItem={function({item}){ 
            return <View style={{ flexDirection : "row" , borderWidth:1 , borderBlockColor : "black" , padding : 5 , alignItems : "center"}}>
                <Button onPress={function(){
                    navigation.navigate("update-etudiant" , {id : item.id })
                }} color="orange" title="m"/>
                <Button onPress={function(){  
                    supprimer(item.id)
                }} color="red" title="s"/>
                <Text style={{marginStart : 5}}>nom { item.nom } - email : {item.email}</Text>
            </View>
         }}
      />
    </View>
  )
}

export default AccueilEtudiant

const styles = StyleSheet.create({})