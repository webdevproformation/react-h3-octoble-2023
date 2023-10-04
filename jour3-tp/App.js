import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';

import { NavigationContainer } from "@react-navigation/native"

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import NavigationAccueil from './navigation/NavigationAccueil';
import Profil from './composants/Profil';
const Tabs = createBottomTabNavigator();
import Icone from "react-native-vector-icons/Foundation"



export default function App() {
  return (
    <View style={styles.container}>
      <NavigationContainer >
        <Tabs.Navigator screenOptions={{ headerShown : false}}>
          <Tabs.Screen component={NavigationAccueil} name="home" options={{
            tabBarIcon : function(){
              return <Icone size={30} color={"black"} name="home"/>
            }
          }} />
          <Tabs.Screen component={Profil} name="profil" options={{
            tabBarIcon : function(){
              return <Icone size={30} color={"black"} name="eye"/>
            }
          }}/>
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

// cas pratique 
// ajouter un nouveau lien dans la barre de navigation tabs
// qui va mener vers le composant Preference (à créer)
// dans le composant Preference ajouter une bouton qui mène vers le composant qui s'appelle Option 
// ce composant est accessible via une navigation Stack directement disponible dans le composant Preference
