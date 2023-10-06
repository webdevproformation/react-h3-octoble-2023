import { StyleSheet, Text, View , Button } from 'react-native'
import React , {useContext} from 'react'
import { CompteurContext } from "../context/compteurContext"

const B = () => {
    const { setCompteur  } = useContext(CompteurContext);
  return (
    <View>
      <Text>je suis le composant B</Text>
      <Button onPress={function(){
        setCompteur(function( prevCompteur ){ return prevCompteur + 1 })
      }} title="btn" />
    </View>
  )
}

export default B

const styles = StyleSheet.create({})