import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Premier from './composants/Premier';
import Exo1 from './composants/Exo1';
import MyBouton from './composants/MyBouton';
import Exo2 from './composants/Exo2';

export default function App() {
  return (
    <View style={styles.container}>
      <Exo2 />
      <Text>coucou les amis ! </Text>
      <Premier />
      <Exo1 />
      <MyBouton />
      <StatusBar style="auto" />
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
