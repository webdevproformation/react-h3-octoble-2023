import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useSelector } from "react-redux"

const D = () => {
    const compteur = useSelector(function( state ){ return state.compteur })
  return (
    <View>
      <Text>{compteur}</Text>
    </View>
  )
}

export default D

const styles = StyleSheet.create({})