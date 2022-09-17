import { createNativeStackNavigator } from "@react-navigation/native-stack";
import DetailNewsScreen from "../screens/DetailNewsScreen";
import NewsScreen from "../screens/NewsScreen";
const NewsScreenStack = createNativeStackNavigator();
function NewsStack(){
    return(
        <NewsScreenStack.Navigator>
            <NewsScreenStack.Screen name="NewsScreen" component={NewsScreen}
            options={{
                headerShown: false,
            }}
            />
            <NewsScreenStack.Screen name="DetailNews" component={DetailNewsScreen}
            options={{
                headerShown: false,
            }}
            />
        </NewsScreenStack.Navigator>
    );
}

export default NewsStack;