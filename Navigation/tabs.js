import React from "react";
import {View,Text,StyleSheet,Image,TouchableOpacity} from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from "../screens/HomeScreen";
import MarketScreen from "../screens/MarketScreen";
import PortfolioScreen from "../screens/Portfolio";
import BasketsScreen from "../screens/BasketsScreen";
import { COLORS } from "../components/constants";

const Tab = createBottomTabNavigator();
function Tabs(){
    return(
        <Tab.Navigator
        screenOptions={{
            "tabBarShowLabel": false,
            "tabBarStyle": [
              {
                "display": "flex"
              },
              null
            ]
          }}

        
        >
            <Tab.Screen name="Home" component={HomeScreen} options={{
                headerShown: false,
                tabBarIcon: ({focused})=>(
                    <View style={styles.tabOption}>
                    {/* <TouchableOpacity> */}
                        <Image source={require("../assets/Home.png")} style={{
                            tintColor: focused ? COLORS.primary : COLORS.black,
                            ...styles.imgStyle}}/>
                        <Text style={{color: focused ? COLORS.primary : COLORS.black,}} >Home</Text>
                    {/* </TouchableOpacity> */}
                    </View>
                )
            }} />
            <Tab.Screen name="Market" component={MarketScreen} options={{
                headerShown: false,
                tabBarIcon: ({focused})=>(
                    <View style={styles.tabOption}>
                    {/* <TouchableOpacity> */}
                        <Image source={require("../assets/Market.png")} style={{
                            tintColor: focused ? COLORS.primary : COLORS.black,
                            ...styles.imgStyle}}/>
                        <Text style={{color: focused ? COLORS.primary : COLORS.black,}} >Market</Text>
                    {/* </TouchableOpacity> */}
                    </View>
                )
            }} />
            <Tab.Screen name="Baskets" component={BasketsScreen} options={{
                headerShown: false,
                tabBarIcon: ({focused})=>(
                    <View style={styles.tabOption}>
                    {/* <TouchableOpacity> */}
                        <Image source={require("../assets/Basket.png")} style={{
                            tintColor: focused ? COLORS.primary : COLORS.black,
                            ...styles.imgStyle}}/>
                        <Text style={{color: focused ? COLORS.primary : COLORS.black,}} >Baskets</Text>
                    {/* </TouchableOpacity> */}
                    </View>
                )
            }} />
            <Tab.Screen name="Portfolio" component={PortfolioScreen} options={{
                headerShown: false,
                tabBarIcon: ({focused})=>(
                    <View style={styles.tabOption}>
                    {/* <TouchableOpacity> */}
                        <Image source={require("../assets/Portfolio.png")} style={{
                            tintColor: focused ? COLORS.primary : COLORS.black,
                            ...styles.imgStyle}}/>
                        <Text style={{color: focused ? COLORS.primary : COLORS.black,}} >Portfolio</Text>
                    {/* </TouchableOpacity> */}
                    </View>
                )
            }} />
            
        </Tab.Navigator>
    );
}
const styles = StyleSheet.create({
    imgStyle:{
        width: 24,
        height: 24,
    },
    tabOption:{
        justifyContent: 'center',
        alignItems: 'center',
    }
})
export default Tabs;