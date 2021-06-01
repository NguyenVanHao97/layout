import React from 'react'
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import COLORS from '../../contain/colors'
import SIZE from '../../contain/sizes'
const Header = () => {
    return (
        <View style={styles.big_container}>
            <View style={styles.container}>
            <View style={styles.null}>
            </View>
            <Text style={styles.text}>
                My home Việt Nam
            </Text>
            <TouchableOpacity>
                <Image style={styles.image} source={require('../../assest/bell.png')}/>
                <View style={styles.circle}>
                    <Text style={styles.text_circle}>
                        3
                    </Text>
                </View>
            </TouchableOpacity>
            </View>
            
        </View>
    )
}

export default Header

const styles = StyleSheet.create({
    container:{
        display:'flex',
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        marginHorizontal:20,
        paddingVertical:10,
        
    },
    big_container:{
        backgroundColor:COLORS.background_item
    },
    text:{
        fontSize:SIZE.size18,
        fontWeight:'700',
        color:COLORS.text_color
    },
    image:{
        position:'absolute'
    },
    circle:{
        backgroundColor:COLORS.background_pink,
        height:12,
        width:12,
        borderRadius:6,
        // marginRight:0
        left:12,
        top:-6
    },
    text_circle:{
        fontSize:SIZE.size8,
        color:COLORS.text_white,
        alignItems:'center',
        alignSelf:'center'
    }

})
