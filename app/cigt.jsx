import { StyleSheet, Text, View } from 'react-native'
import { Link } from 'expo-router'
import React from 'react'

const cigt = () => {
  return (
    <View styles={ styles.container }>
      <View>
        <Text styles={ styles.title }>Weather</Text>
      </View>

      <View styles={ styles.footer }>
        <Link href="/cpc">Companion Planting Catalogue</Link>
        <Link href="/journal">Journal</Link>
      </View>
    

    </View>
  )
}

export default cigt

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        marginTop: 20,
        backgroundColor: 'tan',

    },

    title: {
        fontWeight: "bold",
        fontSize: 30,
        
    },

    footer: {
      
      alignItems: "flex-end",
      justifyContent: "center",
      
      
    },
})