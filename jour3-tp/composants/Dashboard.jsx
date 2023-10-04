import { View , Text } from "react-native"

function Dashboard({ route }) {
    return ( <View>
        <Text>Bonjour {route.params.identifiants.login} </Text>
    </View>);
}

export default Dashboard;