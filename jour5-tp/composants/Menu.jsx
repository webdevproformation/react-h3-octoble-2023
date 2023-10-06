import { StyleSheet, Text, View } from 'react-native'
import React  , {useContext} from 'react'
import {ProfilContext} from "../context/profilContext"

const Menu = () => {
    const {profil} = useContext(ProfilContext);
  return (
    <View>
        <Text>Menu : </Text>
        { profil.isLogged ? <Text>Bienvenue {profil.login}</Text> : <Text>se connecter </Text>  }
      
    </View>
  )
}

export default Menu

const styles = StyleSheet.create({})