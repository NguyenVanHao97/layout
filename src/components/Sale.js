import React,{useState} from 'react'
import { StyleSheet, Text, View ,TouchableOpacity ,Image ,FlatList,keyExtractor,Dimensions} from 'react-native'
import COLORS from '../../contain/colors'
import SIZE from '../../contain/sizes'
const WIDTH = Dimensions.get('window').width;
const HEIGHT = Dimensions.get('window').height;
const listData = [
    {id:1 , content:'Menu' , image : require('../../assest/menu.png')},
    {id:2 , content:'Happy Bucket' , image : require('../../assest/sale.png')},
    {id:3 , content:'Phiếu ưu đãi' , image : require('../../assest/ticker.png')},
    {id:4 , content:'Booking' , image : require('../../assest/booking.png')},
    {id:5 , content:'Khuyến mãi' , image : require('../../assest/khuyenmai.png')},
    {id:6 , content:'Gọi món' , image : require('../../assest/order.png')},
    {id:7 , content:'Xem thêm' , image : require('../../assest/xemthem.png')},
]



const Sale = () => {
    const [listItems, setListItems] = useState(listData);
    const ItemView = ({ item }) => {
        return (
            <TouchableOpacity style={styles.item}>
              <Image style={styles.image} source={item.image} />
                <Text style={styles.text_item} >
              {item.content}
                </Text>
            </TouchableOpacity>
        );
      };
    return (
        <View style={styles.container}>
            <FlatList 
                data={listItems}
                renderItem={ItemView}
                keyExtractor={(item, index) => index.toString()}
                numColumns={4}
            />
        </View>
    )
}

export default Sale

const styles = StyleSheet.create({
    container:{
        backgroundColor:COLORS.background_item,
        width:WIDTH,
        alignItems:'center',
        marginVertical:20,
        marginTop:0,
        paddingVertical:10

    },
    item:{
        
        paddingVertical:20,
        alignItems:'center'
    },
    text_item:{
        fontSize:SIZE.size12,
        fontWeight:'400',
        color:COLORS.small_text,
        marginTop:10
    },
    image:{
        marginHorizontal:20,
    }
})
