import React,{useState} from 'react'
import { StyleSheet, Text, View ,FlatList,Dimensions,TouchableOpacity,Image} from 'react-native'
import COLORS from '../../contain/colors'
import SIZE from '../../contain/sizes'
const WIDTH = Dimensions.get('window').width;
const HEIGHT = Dimensions.get('window').height;
const listData = [
    {id:1, name:'Đón Valentine không cô đơn với Buffet_Dimsum tình nhân chỉ 142.000' , image : require('../../assest/image1.png')},
    {id:2, name:'Happy day out: BUFFET giá chỉ còn 199.000vnđ/khách. Áp dụng vào thứ 3...' , image : require('../../assest/image2.png')},
    {id:3, name:'Happy Family: Miễn phí Buffet, áp dụng cho ông bà (từ 65 tuổi) đi cùng gia đình' , image : require('../../assest/image3.png')},
    {id:4, name:'Happy Office Women: Buffet giá chỉ còn 199.000vnđ/khách. Áp dụng cho KH Nữ...' , image : require('../../assest/image4.png')},
    {id:5, name:'Happy Student: Buffet giá chỉ còn 199.000vnđ/khách. Áp dụng vào mỗi th...' , image : require('../../assest/image5.png')},
]

const HotSale = () => {
    const [listItems, setListItems] = useState(listData);
    const ItemView = ({ item }) => {
        return (
            <TouchableOpacity style={styles.item}>
              <Image style={styles.image} source={item.image} />
                <Text style={styles.text_item} >
              {item.name}
                </Text>
            </TouchableOpacity>
        );
      };
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.header_sale}>
                Khuyến mại Hot
                </Text>
                <TouchableOpacity>
                    <Text style={styles.view}>
                     View all ({listData.length})
                    </Text>
                </TouchableOpacity>
            </View>
            <FlatList
                data={listItems}
                renderItem={ItemView}
                keyExtractor={(item, index) => index.toString()}
                showsVerticalScrollIndicator={false}
            />
        </View>
    )
}

export default HotSale

const styles = StyleSheet.create({
    container:{
        backgroundColor:COLORS.background_item
    },
    header_sale:{
        fontSize:SIZE.size17,
        fontWeight:'700',
        color:COLORS.text_color
    },
    view:{
        fontSize:SIZE.size15,
        fontWeight:'400',
        color:COLORS.link_color
    },
    header:{
        display:'flex',
        flexDirection:'row',
        justifyContent:'space-between',
        marginHorizontal:WIDTH*0.05,
        marginVertical:HEIGHT*0.015
    },
    image:{
        height: HEIGHT*0.35,
        width:WIDTH*0.95,
        borderRadius:10,
    },
    text_item:{
        fontSize:SIZE.size16,
        fontWeight:'700',
        color:COLORS.text_color,
        marginTop:HEIGHT*0.02,
    },
    item:{
        // alignItems:'center',
        height: HEIGHT*0.5,
        width:WIDTH*0.95,
        marginTop:20,
        marginHorizontal:10,
        borderRadius:10,
        borderBottomWidth:1,
        borderColor:COLORS.main_color
    }
})
