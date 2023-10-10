import { Button, FlatList, StyleSheet, Text, View , Dimensions } from 'react-native'
import React from 'react'
import {useDispatch} from "react-redux"

const Catalogue = () => {
    const dispatch = useDispatch()

    const catalogue = [
        { id : 1 , nom : "Nintendo DS" , prix : 10 },
        { id : 2 , nom : "Nintendo Switch" , prix : 20 },
        { id : 3 , nom : "Xbox" , prix : 40 },
        { id : 4 , nom : "PS5" , prix : 50 },
    ]
  return (
    <View style={styles.center}>
      <FlatList 
        ListHeaderComponent={<Text>Catalogue</Text>}
        data={catalogue}
        renderItem={function({item}){
            return <View style={styles.box}>
                <Text style={ styles.alignVertical }>
                     {item.nom} {"\n"} prix : {item.prix} {"\n"}
                    <Button onPress={function(){
                        dispatch({ "type" : "PANIER_ADD" , payload : item })
                    }} title={"add"} />
                </Text>
            </View>
        }}
        keyExtractor={function( item ){ return item.id}}
        numColumns={2}
      />
    </View>
  )
}

export default Catalogue

const styles = StyleSheet.create({
    center : {
        flex: 1,
        alignItems: "center",
        justifyContent: "center"
    },
    box: {
        marginVertical : 10,
        justifyContent: "center",
        width : (Dimensions.get("screen").width / 2) - 20 ,
        borderColor : "black",
        borderWidth : 1,
        alignItems: "center",
        
    },
    alignVertical : {
        justifyContent : "center",
        alignItems: "center",
        textAlign:"center"
    }
})