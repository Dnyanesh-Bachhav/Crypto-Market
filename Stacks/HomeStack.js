import react from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../screens/HomeScreen';
import BasketItem from '../screens/BasketItemsScreen';
import { createDrawerNavigator } from '@react-navigation/drawer';
import CustomDrawer from '../Navigation/drawer/CustomDrawer';
import ChatbotScreen from '../screens/ChatbotScreen';
import MarketScreen from '../screens/MarketScreen';
import NewsScreen from '../screens/NewsScreen';
import BasketsScreen from '../screens/BasketsScreen';
import PortfolioScreen from '../screens/Portfolio';
import { COLORS } from '../components/constants';
import Home from '../assets/Home.png';
import { Image } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { Fontisto } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import GreedAndFearIndexScreen from '../screens/GreedAndFearIndexScreen';
import TransactionHistoryScreen from '../screens/TransactionHistoryScreen';
import { FontAwesome5 } from '@expo/vector-icons';
import CoinDetailedScreen from '../screens/CoinChartScreen';
const HomeScreenStack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();
function DrawerStack(){
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
            <Drawer.Screen name="Home " component={HomeScreen} options={{
                drawerIcon: ({color})=>(
                    <FontAwesome name="home" size={24} color={color} />
                )
            }} />
            <Drawer.Screen name="Market" component={MarketScreen} options={{
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
}


function HomeStack(){
    return(
        <HomeScreenStack.Navigator>
            <HomeScreenStack.Screen name="Home" component={HomeScreen} 
            options={{
                headerShown: false,
            }}
            />
            {/* <HomeScreenStack.Screen name="Home" component={DrawerStack} 
            options={{
                headerShown: false,
            }}
            /> */}
            <HomeScreenStack.Screen name="coinDetails" component={CoinDetailedScreen}
            options={{
                headerShown: false,
            }}
            />
            <HomeScreenStack.Screen name="BasketItem" component={BasketItem}
            options={{
                headerShown: false,
            }}
            />
        </HomeScreenStack.Navigator>
    );
}

export default HomeStack;