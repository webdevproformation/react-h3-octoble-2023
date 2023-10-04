import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Accueil from './composants/Accueil';
import Profil from './composants/Profil';
import { NavigationContainer } from "@react-navigation/native"
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import Login from './composants/Login';
import Dashboard from './composants/Dashboard';

const Stack = createNativeStackNavigator()

export default function App() {
  return (
    <View style={styles.container}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen component={Accueil} name="accueil" />
          <Stack.Screen component={Profil} name="profil"/>
          <Stack.Screen component={Login} name="login"/>
          <Stack.Screen component={Dashboard} name="dashboard"/>
        </Stack.Navigator>
      </NavigationContainer>
      {/*<Accueil />
      <Profil /> */}
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
