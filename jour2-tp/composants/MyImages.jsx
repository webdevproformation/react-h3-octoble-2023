import { View , Image , Text } from "react-native"

function MyImages() {
    return ( 
        <View>
            <Text>image locale</Text>
            {/** attention si vous utiliser la composant Image et que l'image est stockée dans le dossier assets vous devez utiliser le composant ainsi */}
            <Image source={ require("../assets/favicon.png") }  />
            {/** pas besoin de lui donner une largeur et une hauteur  */}
            <Text>image sur internet</Text>
            <Image source={{ 
                uri : "https://via.placeholder.com/200x100",
                width : 200,
                height : 100
            }} />
        </View>
     );
}

export default MyImages;