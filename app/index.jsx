import { StyleSheet, Text, Image, View } from 'react-native'
import { Link } from 'expo-router'
import React from 'react'

import Logo from '../assets/SuperGardener_Logo.png'
import Title from '../assets/SuperGardener.png'


const Home = () => {
  return (
    <View style={styles.container}>
      <Image source={Logo} style={styles.image}/>
      <Image source={Title} style={styles.title}/>
      <Text style={{ marginTop: 10, marginBottom: 30, fontSize: 20, fontWeight: '500' }}>
        Spruce up your life!
      </Text>

      <View style={styles.card}>
        <Link href="/cigt" style={ styles.link }>Tap Here To Enter!</Link>
      </View>
    </View>
  )
}

export default Home

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'top',
        marginTop: 0,
        backgroundColor: 'tan',

    },

    title: {
        Width: 200,
        marginHorizontal: 10,
    },

    image: {
        maxWidth: 300,
        maxHeight: 400,
        marginVertical: 1,

    },

    card: {
        backgroundColor: '#eee',
        padding: 20,
        borderRadius: 50,
        boxShadow: '4px 4px rgba(0,0,0,0.1)',
        backgroundColor: '#094C33',
    },

    link: {
        color: 'white',
    }

})