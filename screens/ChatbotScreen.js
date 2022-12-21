import { StyleSheet, Text, View } from "react-native";
import DrawerScreenHeader from "../components/HomeScreen/DrawerScreenHeader";

// Chatbot Screen powered by ChatGPT

function ChatbotScreen(){
    return(
        <View style={styles.container}>
            <DrawerScreenHeader headerText={"Chatbot"} />
            <Text>Hello World...!!!</Text>
        </View>
    );
}
const styles = StyleSheet.create({
    container:{
        flex: 1,
    }
})
export default ChatbotScreen;