import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import A from './composants/A';
import { CompteurContextProvider } from './context/compteurContext';
import Menu from './composants/Menu';
import Formulaire from './composants/Formulaire';
import { ProfilContextProvider } from './context/profilContext';

import Store from './store';

import D from './composants/D';
import E from './composants/E';


export default function App() {
  return (
    <View style={styles.container}>
      <CompteurContextProvider>{/** emballer le composant A avec le Provider */ }
        <A />
      </CompteurContextProvider>
      <ProfilContextProvider>
        <Menu />
        <Formulaire />
      </ProfilContextProvider>
      <Store>
        <D />
        <E />
      </Store>
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
