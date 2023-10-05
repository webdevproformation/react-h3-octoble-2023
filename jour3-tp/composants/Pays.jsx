import { View , Text , Image, FlatList} from "react-native"
import {useState, useEffect} from "react"

function Pays({route}) {

    const [resultat, setResultat]= useState([]);

    useEffect( function(){
        const pays = route.params.pays
        fetch(`https://restcountries.com/v3.1/name/${pays}`)
            .then(function(reponse){ return reponse.json()})
            .then(function(data){ 
                if(Array.isArray(data)){
                   
                    setResultat(data)
                    return ;
                }
                setResultat( [] )
            })
    } , [])

    return ( <View style={{ marginHorizontal : 20 }}>

        <Text > {route.params.pays} </Text>
        {resultat.length === 0 ? <Text>aucun pays ne correspond à cette recherche en bdd</Text> : <Text>nombre de pays trouvé : {resultat.length}</Text>}
        <FlatList 
            numColumns={2}
            ItemSeparatorComponent={function(){ return <Text>-</Text> }}
            data={ resultat }
            renderItem={function({item}){
                return <View style={{ marginHorizontal : 5 , flexWrap: "wrap" }}>
                <Text numberOfLines={2} ellipsizeMode={'tail'} style={{ width:140 }}>nom pays : {item?.name?.common}</Text>
                <Text>population : { new Intl.NumberFormat("fr-Fr").format( item?.population )}</Text>
                <Image source={{uri : item?.flags?.png , width: 150 , height : 100}} /> 
                <Text numberOfLines={2} ellipsizeMode={'tail'} style={{ width:140 }}> capitale : {item?.capital ? item?.capital[0] : ""}</Text>
            </View>
            } }
        />
    </View>  );
}

export default Pays;