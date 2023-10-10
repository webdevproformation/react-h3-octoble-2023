import { StyleSheet, Text, View , Button } from 'react-native'
import React from 'react'
import { useDispatch } from "react-redux"

const E = () => {
  const dispatch =  useDispatch();

  return (
    <View>
      <Text>E</Text>
      <Button title="+" onPress={function(){
        dispatch({ type : "COMPTEUR_AUGMENTER" })
      }} />
    </View>
  )
}

export default E

const styles = StyleSheet.create({})