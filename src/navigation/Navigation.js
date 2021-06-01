import React from 'react'
import { StyleSheet, Text, View ,Image} from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/HomeScreen';
import HistoryScreen from '../screens/HistoryScreen';
import RequestScreen from '../screens/RequestScreen';
import AccountScreen from '../screens/AccountScreen';
import COLORS from '../../contain/colors'
const Tab = createBottomTabNavigator();
const Navigation = () => {
    return (
        <Tab.Navigator 
        initialRouteName="Home"
        tabBarOptions={{
            activeTintColor: COLORS.main_color,
          }}
        >
            <Tab.Screen name="Home"
             component={HomeScreen} 
             options={{
                tabBarLabel: 'Home',
                tabBarIcon: ({ focused }) => (
                  <Image  
                  source={focused ? require('../../assest/home.png') : require('../../assest/homegray.png')} />
                ),
              }}
             />
            <Tab.Screen name="History" 
            component={HistoryScreen}
            options={{
                tabBarLabel: 'Lịch sử',
                tabBarIcon: ({ focused }) => (
                  <Image 
                  source={ focused ? require('../../assest/history-pink.png') : require('../../assest/history.png') }/>
                ),
              }}
            />
            <Tab.Screen name="yêu cầu" 
            component={RequestScreen}
            options={{
                tabBarLabel: 'yêu cầu',
                tabBarIcon: ({ focused }) => (
                  <Image 
                  source={focused ? require('../../assest/request-pink.png') : require('../../assest/request.png') } />
                ),
              }}
            />
            <Tab.Screen name="tài khoản" 
            component={AccountScreen}
            options={{
                tabBarLabel: 'tài khoản',
                tabBarIcon: ({ focused }) => (
                  <Image 
                  source={focused ? require('../../assest/account-pink.png') : require('../../assest/account.png') } />
                ),
              }}
            />
        </Tab.Navigator>
    )
}

export default Navigation

const styles = StyleSheet.create({

})
