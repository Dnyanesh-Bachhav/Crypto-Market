import react from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MarketScreen from '../screens/MarketScreen';
import BuyCoinScreen from '../screens/BuyCoinScreen';
import SellCoinScreen from '../screens/SellCoinScreen';
const MarketScreenStack = createNativeStackNavigator();
function MarketStack(){
    return(
        <MarketScreenStack.Navigator>
            <MarketScreenStack.Screen name="MarketScreen" component={MarketScreen} 
            options={{
                headerShown: false,
            }}
            />
            <MarketScreenStack.Screen name="BuyCoinScreen" component={BuyCoinScreen}
            options={{
                headerShown: false,
            }}
            />
            <MarketScreenStack.Screen name="SellCoinScreen" component={SellCoinScreen}
            options={{
                headerShown: false,
            }}
            />
        </MarketScreenStack.Navigator>
    );
}

export default MarketStack;