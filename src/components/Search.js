import React from 'react'
import { Image, StyleSheet, Text, View,Dimensions, TextInput } from 'react-native'
import COLORS from '../../contain/colors'
const WIDTH = Dimensions.get('window').width;
const HEIGHT = Dimensions.get('window').height;

const Search = () => {
    return (
        <View style={styles.container}>
            <View style={styles.small_container}>
                <Image source={require('../../assest/Shape.png')} />
                <TextInput style={styles.text_input} placeholder="Tìm theo tên, danh mục, món ăn…"/>
            </View>
        </View>
    )
}

export default Search

const styles = StyleSheet.create({
    container:{
       backgroundColor:COLORS.background_item
    },
    small_container:{
        height: HEIGHT*0.07,
        paddingHorizontal:10,
        marginHorizontal:10,
        borderRadius:10,
        display:'flex',
        flexDirection:'row',
        alignItems:'center',
        backgroundColor:COLORS.background_color,  
        marginBottom:10
    },
    text_input:{
        fontSize:13,
        fontWeight:'normal',
        color:COLORS.small_text,
        backgroundColor:COLORS.background_color,  
        marginHorizontal:10      
    }

})
