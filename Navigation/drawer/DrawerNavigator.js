import {View, Text} from 'react-native';
import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import CustomDrawer from './CustomDrawer';
import HomeScreen from '../../screens/HomeScreen';
import HomeStack from '../../Stacks/HomeStack';
import { COLORS } from '../../components/constants';
import MarketScreen from '../../screens/MarketScreen';
import MarketStack from '../../Stacks/MarketStack';
import Main1 from './Main1';
import NewsScreen from '../../screens/NewsScreen';
import BasketsScreen from '../../screens/BasketsScreen';
import PortfolioScreen from '../../screens/Portfolio';
import GreedAndFearIndexScreen from '../../screens/GreedAndFearIndexScreen';
import TransactionHistoryScreen from '../../screens/TransactionHistoryScreen';
import ChatbotScreen from '../../screens/ChatbotScreen';
import { FontAwesome5 } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { Fontisto } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
const Drawer = createDrawerNavigator();
const DrawerNavigator = () => {
    return(
        <Drawer.Navigator initialRouteName="Home1" drawerContent={(props)=> <CustomDrawer {...props} />} screenOptions={{
            headerShown: false,
            drawerActiveBackgroundColor: COLORS.primary,
            drawerActiveTintColor: COLORS.white,
            drawerInactiveTintColor: COLORS.black,
            drawerLabelStyle:{
                marginLeft: -25
            }
            
        }} >
            <Drawer.Screen name="Main " component={Main1} options={{
                drawerIcon: ({color})=>(
                    <FontAwesome name="home" size={24} color={color} />
                )
            }} />
            <Drawer.Screen name="Home " component={HomeStack} options={{
                drawerIcon: ({color})=>(
                    <FontAwesome name="home" size={24} color={color} />
                )
            }} />
             <Drawer.Screen name="Market" component={MarketStack} options={{
                drawerIcon: ({color})=>(
                    <FontAwesome name="line-chart" size={24} color={color} />
                )
            }} />
            <Drawer.Screen name="News" component={NewsScreen}
            options={{
                drawerIcon: ({color})=>(
                    <Ionicons name="newspaper-outline" size={24} color={color} />
                )
            }} />
            <Drawer.Screen name="Basket" component={BasketsScreen} 
            options={{
                drawerIcon: ({color})=>(
                    <Fontisto name="shopping-basket" size={24} color={color} />
                )
            }} />
            <Drawer.Screen name="Portfolio" component={PortfolioScreen} 
            options={{
                drawerIcon: ({color})=>(
                    <FontAwesome name="line-chart" size={24} color={color} />
                )
            }} />
            <Drawer.Screen name="Greed and Fear Index" component={GreedAndFearIndexScreen} 
            options={{
                drawerIcon: ({color})=>(
                    <MaterialIcons name="speed" size={24} color={color} />
                )
            }} />
            <Drawer.Screen name="Transaction History" component={TransactionHistoryScreen} 
            options={{
                drawerIcon: ({color})=>(
                    <FontAwesome5 name="history" size={24} color={color} />
                )
            }} />
            <Drawer.Screen name="Chatbot" component={ChatbotScreen} 
            options={{
                drawerIcon: ({color})=>(
                    <FontAwesome5 name="robot" size={24} color={color} />
                )
            }} />
        </Drawer.Navigator>
    );
};

export default DrawerNavigator;