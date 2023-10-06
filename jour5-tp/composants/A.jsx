import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import B from './B'
import C from './C'

const A = () => {
  return (
    <View>
      <Text>je suis le composant A</Text>
      <B />
      <C />
    </View>
  )
}

export default A

const styles = StyleSheet.create({})