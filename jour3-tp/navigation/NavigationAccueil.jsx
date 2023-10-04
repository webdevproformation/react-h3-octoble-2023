import Accueil from '../composants/Accueil';
import Profil from '../composants/Profil';
import Login from '../composants/Login';
import Dashboard from '../composants/Dashboard';
import Pays from '../composants/Pays';
import { createNativeStackNavigator } from "@react-navigation/native-stack"

const Stack = createNativeStackNavigator()

function NavigationAccueil() {
    return ( <Stack.Navigator>
        <Stack.Screen component={Accueil} name="accueil" />
        <Stack.Screen component={Profil} name="profil"/>
        <Stack.Screen component={Login} name="login"/>
        <Stack.Screen component={Dashboard} name="dashboard"/>
        <Stack.Screen component={Pays} name="pays"/>
      </Stack.Navigator> );
}

export default NavigationAccueil;