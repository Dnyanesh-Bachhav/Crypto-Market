import React from "react";
import {View,Text,StyleSheet,Image,TouchableOpacity} from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from "../screens/HomeScreen";
import MarketScreen from "../screens/MarketScreen";
import PortfolioScreen from "../screens/Portfolio";
import BasketsScreen from "../screens/BasketsScreen";
import { COLORS } from "../components/constants";
import HomeStack from "../Stacks/HomeStack";
import BasketsStack from "../Stacks/BasketStack";
import MarketStack from "../Stacks/MarketStack";
import NewsScreen from "../screens/NewsScreen";
import NewsStack from "../Stacks/NewsStack";



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
            <Tab.Screen name="HomeScreen" component={HomeStack} options={{
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
            <Tab.Screen name="Market" component={MarketStack} options={{
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
            <Tab.Screen name="News" component={NewsStack} options={{
                    headerShown: false,
                    unmountOnBlur: true,
                    tabBarIcon: ({focused})=>(
                        <View style={styles.tabOption}>
                        {/* <TouchableOpacity> */}
                            <Image source={require("../assets/newspaper.png")} style={{
                                tintColor: focused ? COLORS.primary : COLORS.black,
                                ...styles.imgStyle}}/>
                            <Text style={{color: focused ? COLORS.primary : COLORS.black,}} >News</Text>
                        {/* </TouchableOpacity> */}
                        </View>
                    )
                }} />
            <Tab.Screen name="Baskets" component={BasketsStack} options={{
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
                unmountOnBlur: true,
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