import react from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../screens/HomeScreen';
import coinChartScreen from '../screens/CoinChartScreen';
import BasketItem from '../screens/BasketItemsScreen';
const HomeScreenStack = createNativeStackNavigator();
function HomeStack(){
    return(
        <HomeScreenStack.Navigator>
            <HomeScreenStack.Screen name="Home" component={HomeScreen} 
            options={{
                headerShown: false,
            }}
            />
            <HomeScreenStack.Screen name="coinDetails" component={coinChartScreen}
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