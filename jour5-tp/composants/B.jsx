import { StyleSheet, Text, View , Button } from 'react-native'
import React from 'react'

const B = () => {
  return (
    <View>
      <Text>je suis le composant B</Text>
      <Button onPress={function(){}} title="btn" />
    </View>
  )
}

export default B

const styles = StyleSheet.create({})