import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Slot, Stack } from 'expo-router'

const RootLayout = () => {
  return (
      <Stack>
        <Stack.Screen name="index" options={{ title: 'SuperGardener', headerShown: false }} />
        <Stack.Screen name="cigt" options={{ title: 'Can I Garden Today?', }}/>
        <Stack.Screen name="cpc" options={{ title: 'Companion Planting', }}/>
        <Stack.Screen name="journal" options={{ title: 'Journal', }}/>
      </Stack>
  )
}

export default RootLayout

const styles = StyleSheet.create({})