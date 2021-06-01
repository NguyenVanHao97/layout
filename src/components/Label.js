import React from 'react'
import { StyleSheet, Text, View,Dimensions ,Image, TouchableOpacity} from 'react-native'
import COLORS from '../../contain/colors'
import SIZE from '../../contain/sizes'

const WIDTH = Dimensions.get('window').width;
const HEIGHT = Dimensions.get('window').height;

const Label = () => {
    return (
        <View style={styles.container}>
            <View style={styles.Label}>
                <View style={styles.label_text}>
                    <Text style={styles.service}>
                    Chăm sóc khách hàng
                    </Text>
                    <TouchableOpacity>
                    <Text style={styles.phone}>
                        <Image style={styles.img} source={require('../../assest/phone.png')} />
                    Hotline: 0938.22.61.66
                    </Text>
                    </TouchableOpacity>
                    <TouchableOpacity>
                    <Text style={styles.mail}>
                    <Image style={styles.img} source={require('../../assest/mail.png')}/>
                    Gửi yêu cầu cho My Home VN
                    </Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}

export default Label

const styles = StyleSheet.create({
    container:{
        backgroundColor:COLORS.background_item,
        width:WIDTH,
        height:HEIGHT*0.19,
        paddingTop:20
    },
    Label:{
        backgroundColor:COLORS.main_color,
        borderTopRightRadius:60,
        height:HEIGHT
    },
    label_text:{
        display:'flex',
        flexDirection:'column',
        paddingLeft:20,
    },
    service:{
        color:COLORS.text_white,
        fontSize:SIZE.size16,
        fontWeight:'700',
        marginTop:5
    },
    phone:{
        color:COLORS.text_white,
        fontSize:SIZE.size12,
        borderBottomWidth:1,
        borderColor:COLORS.text_white,
        width:WIDTH*0.45,
        paddingVertical:5
    },
    mail:{
        color:COLORS.text_white,
        fontSize:SIZE.size12,
        paddingVertical:5
    },
    img:{
        paddingRight:30
    }
})
