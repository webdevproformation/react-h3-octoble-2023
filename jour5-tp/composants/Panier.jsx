import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Constants from 'expo-constants';
import { useSelector } from "react-redux"

const Panier = () => {
  const panier = useSelector(function(store){ return store.panier  })
  return (
    <View style={styles.mtop}>
      <Text>Nb produit {panier.length} : total : {panier.reduce(function(total, item){ return total + (item.qte * item.prix)} , 0)  }</Text>
    </View>
  )
}

export default Panier

const styles = StyleSheet.create({
    mtop : {
        marginTop : Constants.statusBarHeight
    }
})