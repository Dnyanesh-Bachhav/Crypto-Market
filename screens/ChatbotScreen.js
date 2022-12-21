import { Text, View } from "react-native";
import DrawerScreenHeader from "../components/HomeScreen/DrawerScreenHeader";

function ChatbotScreen(){
    return(
        <View>
            <DrawerScreenHeader headerText={"Chatbot"} />
            <Text>Hello World...!!!</Text>
        </View>
    );
}
export default ChatbotScreen;