import React from 'react'
import { StyleSheet, Text, View,ScrollView,ScrollViewComponent, FlatList, ScrollViewBase } from 'react-native'
import BigSale from '../components/BigSale'
import Carousel from '../components/Carousel'
import Header from '../components/Header'
import HotSale from '../components/HotSale'
import Sale from '../components/Sale'
import Search from '../components/Search'
import COLORS from '../../contain/colors'
import Label from '../components/Label'

const HomeScreen = () => {
    return (
        <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
                <Header/>
                <Search/>
                <Carousel/>
                <Sale/>
                <BigSale/>
                <HotSale/>
                <Label/>
        </ScrollView>
    )
}

export default HomeScreen

const styles = StyleSheet.create({
    container:{
        backgroundColor:COLORS.background_color
    }
})
