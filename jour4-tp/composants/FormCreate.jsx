// rnfes
// extension ajouter en plus l'extension 
import { StyleSheet, Text, View , Button , TextInput } from 'react-native'
import React from 'react'
const FormCreate = () => {
  return (
    <View>
      <Text>Créer un nouveau profil étudiant</Text>
      <TextInput placeholder="nom" onChangeText={function(){}} value={} style={styles.input} />
      <TextInput placeholder="age" onChangeText={function(){}} value={} style={styles.input}/>
      <TextInput placeholder="email" onChangeText={function(){}} value={} style={styles.input}/>
      <Button title="créer" onPress={function(){}} />
    </View>
  )
}
export default FormCreate
const styles = StyleSheet.create({
    input : {
        borderColor : "black" , padding : 10 , borderWidth : 2 , marginVertical : 10
    }
})