import { StyleSheet, Text, View } from 'react-native'
import React , {useContext} from 'react'
import { CompteurContext } from "../context/compteurContext"

const C = () => {
   const { compteur } =  useContext(CompteurContext);
  return (
    <View>
      <Text>je suis le composant C</Text>
      <Text>{ compteur }</Text>
    </View>
  )
}

export default C

const styles = StyleSheet.create({})