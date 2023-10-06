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

// créer un context profil 
// dans ce context vous allez avoir un objet qui a la valeur suivant 
// { login : "alain" , password : "1234" }

// créer 2 composants 
// Menu  => vous allez mettre un text "se connecter"
// Formulaire  => vous allez mettre un formulaire avec 2 champs 
//            login et password + bouton 
// si vous remplissez le formulaire correctement => dans le composant Menu remplacer "se connecter" par "bienvenue alain" 