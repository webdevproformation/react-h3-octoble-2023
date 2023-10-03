import {useState, useEffect} from "react"
import { Text, FlatList , View } from "react-native"

function Exo5() {
    const [pays, setPays] = useState([])
    useEffect(function(){
        fetch("https://restcountries.com/v3.1/all")
            .then(function(reponse){ return reponse.json()})
            .then(function(data){ setPays(data)})
    } , [])
    return ( <FlatList 
        data={pays}
        renderItem={function({item}){
            return <Text>{item.name.common}</Text>
         }}
    /> );
}

export default Exo5;