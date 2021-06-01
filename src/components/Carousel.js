import React from 'react'
import { Image, StyleSheet, Text, View ,Dimensions} from 'react-native'
const WIDTH = Dimensions.get('window').width;
const HEIGHT = Dimensions.get('window').height;
const Carousel = () => {
    return (
        <View>
            <Image style={styles.container} source={require('../../assest/carousel.png')} />
        </View>
    )
}

export default Carousel

const styles = StyleSheet.create({
    container:{
        height: HEIGHT*0.3,
        width:WIDTH,
    }
})
