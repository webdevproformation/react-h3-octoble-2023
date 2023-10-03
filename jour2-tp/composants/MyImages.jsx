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

// créer le composant Exo3
// text => taille de 30 / couleur verte : marge externe de 20
// ce composant contient le texte suivante : "Exo3"

// zone de saisie appeler une nouvelle adresse web
// un bouton de soumission
// réaliser la mise en forme  
