import react from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import BasketsScreen from '../screens/BasketsScreen';
import BasketItemsScreen from '../screens/BasketItemsScreen';
const HomeScreenStack = createNativeStackNavigator();
function BasketsStack(){
    return(
        <HomeScreenStack.Navigator>
            <HomeScreenStack.Screen name="BasketsScreen" component={BasketsScreen} 
            options={{
                headerShown: false,
            }}
            />
            <HomeScreenStack.Screen name="BasketItem" component={BasketItemsScreen}
            options={{
                headerShown: false,
            }}
            />
        </HomeScreenStack.Navigator>
    );
}

export default BasketsStack;