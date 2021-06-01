import React from 'react'
import { ScrollView, StyleSheet, Text, View } from 'react-native'
import BigSale from './src/components/BigSale'
import Carousel from './src/components/Carousel'
import Header from './src/components/Header'
import HotSale from './src/components/HotSale'
import Sale from './src/components/Sale'
import HomeScreen from './src/screens/HomeScreen'
import Search from './src/components/Search'
import Navigation from './src/navigation/Navigation'
import { NavigationContainer } from '@react-navigation/native';

const App = () => {
  return (
      <NavigationContainer>
        <Navigation/>
      
      </NavigationContainer>
      // <View>
      //   <HomeScreen/>
      // </View>
  )
}

export default App

const styles = StyleSheet.create({})
