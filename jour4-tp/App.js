import { StatusBar } from 'expo-status-bar';
import { StyleSheet,  View } from 'react-native';
import FormCreate from './composants/FormCreate';
import { NavigationContainer } from "@react-navigation/native"
import { createNativeStackNavigator } from "@react-navigation/native-stack"

import Constants from 'expo-constants';
import Accueil from './composants/Accueil';
import FormUpdate from './composants/FormUpdate';

const STATUSBAR_HEIGHT = Constants.statusBarHeight

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <View style={styles.container}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen component={Accueil} name='accueil' /> 
          <Stack.Screen component={FormCreate} name='create-etudiant' /* options={{
            headerShown : false
          }} */ /> 
          <Stack.Screen component={FormUpdate} name='update-etudiant' />
        </Stack.Navigator>
      </NavigationContainer>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop : STATUSBAR_HEIGHT,
    flex: 1,
    backgroundColor: '#fff',
  },
});
