import { StyleSheet, Text, View } from "react-native";
import DrawerScreenHeader from "../components/HomeScreen/DrawerScreenHeader";

// Chatbot Screen powered by ChatGPT

function ChatbotScreen(){
    return(
        <View style={styles.container}>
            <DrawerScreenHeader headerText={"Chatbot"} />
            <View style={{justifyContent: 'center',alignItems: 'center'}} >
                <Text>Chatbot System Powered by ChatGPT</Text>
            </View>
        </View>
    );
}
const styles = StyleSheet.create({
    container:{
        flex: 1,
    }
})
export default ChatbotScreen;