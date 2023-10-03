import {View , FlatList , Text , Image} from "react-native"

function Liste() {
    const etudiants = [
        { nom : "Alain" , age : 22 , photo : "https://via.placeholder.com/100x100"  },
        { nom : "Benois" , age : 20 , photo : "https://via.placeholder.com/100x100"  },
        { nom : "Céline" , age : 30 , photo : "https://via.placeholder.com/100x100"  },
        { nom : "Denis" , age : 10 , photo : "https://via.placeholder.com/100x100"  },
    ];
    // <ul>
    // <FlatList />  {/** renderItem === [].map(function(item){})  */ }
    return ( <View>
        <Text>Représenter une liste dans React Native</Text>
        <FlatList 
            data={etudiants}
            renderItem={function({item}){
                return <View>
                    <Text> {item.nom} a {item.age} ans </Text>
                    <Image source={{ uri : item.photo , width : 100 , height : 100 }} />
                </View>
            }}
        />
    </View> );
}

export default Liste;

// créer le composant Exo4
// importer useState par défaut sa valeur est à false 
// dans la partie vue 
// vous avez un bouton 
// vous avez un Text
// si vous cliquez sur le bouton une premier fois le texte affiché va être 
// "Fin de journée"
// si vous recliquez sur le bouton le texte affiché sera "début de journée"
// { true  ?   :  }