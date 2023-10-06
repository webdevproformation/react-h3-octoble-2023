import { StyleSheet, Text, View , Button , FlatList } from 'react-native'
import AccueilEtudiant from './AccueilEtudiant';
 
const Accueil = ({navigation}) => {
    

  return (
    <View>
      <Text>Accueil</Text>
      <AccueilEtudiant navigation={navigation} />
      <Button onPress={function(){
        navigation.navigate("create-formation")
      }} title="créer une nouvelle formation" color="red" />
    </View>
  )
}

export default Accueil

const styles = StyleSheet.create({})