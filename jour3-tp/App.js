import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';

import { NavigationContainer } from "@react-navigation/native"

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import NavigationAccueil from './navigation/NavigationAccueil';
import Profil from './composants/Profil';
const Tabs = createBottomTabNavigator();



export default function App() {
  return (
    <View style={styles.container}>
      <NavigationContainer>
        <Tabs.Navigator>
          <Tabs.Screen component={NavigationAccueil} name="home" />
          <Tabs.Screen component={Profil} name="profil"/>
        </Tabs.Navigator>
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
