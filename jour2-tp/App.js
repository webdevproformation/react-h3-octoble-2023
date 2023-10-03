import { StatusBar } from 'expo-status-bar';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import Premier from './composants/Premier';
import Exo1 from './composants/Exo1';
import MyBouton from './composants/MyBouton';
import Exo2 from './composants/Exo2';
import MyImages from './composants/MyImages';
import Exo3 from './composants/Exo3';
import AutreComposant from './composants/AutreComposant';

export default function App() {
  return (
    <View style={styles.container}>
      <ScrollView>
        <Exo3  />
        <MyImages />
        <Exo2 />
        <AutreComposant />
        <Text>coucou les amis ! </Text>
        <Premier />
        <Exo1 />
        <MyBouton />
        <StatusBar style="auto" />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
