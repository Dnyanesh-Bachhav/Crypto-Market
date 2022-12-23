import { StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import { COLORS } from "../components/constants";
import DrawerScreenHeader from "../components/HomeScreen/DrawerScreenHeader";
import { Feather } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { useState } from "react";

// Chatbot Screen powered by ChatGPT

function ChatbotScreen(){
    const [text,setText] = useState("");
    return(
        <View style={styles.container}>
            <DrawerScreenHeader headerText={"Chatbot"} />
            <SentMessage />
            <ReceiveMessage />
            <InputMessage text={text} setText={setText} />
        </View>
    );
}

function SentMessage({messageText}){
    return(
        <>
        <View style={styles.sentMsgStyle}>
            <Text style={{color: COLORS.white, }} >Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic nesciunt deserunt eius ab quo voluptate architecto ipsa ipsam neque, quae dicta nam, ut labore blanditiis similique iste odit sed a?</Text>
        </View>
        <Text style={{alignSelf:'flex-end',marginRight: 10, color: COLORS.grey, fontSize: 10 }}>Sent 4:20PM</Text>
        </>
    );
}

function ReceiveMessage(){
    return(
        <>
        <View style={styles.receiveMsgStyle} >
            <Text style={{color: COLORS.grey, }} >Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam cupiditate vel sit beatae illo id rerum. Ut molestias debitis, culpa ipsa recusandae, excepturi praesentium unde, nihil corrupti dolores accusamus est.</Text>
        </View>
        <Text style={{alignSelf:'flex-start',marginLeft: 10, color: COLORS.grey, fontSize: 10 }}>4:22PM</Text>
        </>

    );
}

function InputMessage({text,setText}){
    function handleInputMessage()
    {
        return <SentMessage messageText={text} />;
    }
    return(
        <View style={{ position: 'absolute', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', alignSelf: 'center', bottom: 15 }} >
            <TextInput
            value={text}
            onChangeText={(val)=>{
                setText(val);
                console.log(text);
            }}
             style={styles.inputStyle}
             placeholder="Send a Message."
            />
            <TouchableOpacity style={{backgroundColor: "#4f4cd9", borderRadius: 50, justifyContent: 'center', alignItems: 'center',marginLeft: 10, }} onPress={handleInputMessage} >
                <MaterialIcons name="send" size={24} color={ COLORS.white } style={{ padding: 5, alignSelf: 'center' }} />
            </TouchableOpacity>
        </View>
    );
}



const styles = StyleSheet.create({
    container:{
        flex: 1,
    },
    sentMsgStyle:{
        backgroundColor: "#4f4cd9",
        color: COLORS.white,
        padding: 5,
        alignSelf: 'flex-end',
        width: '70%',
        marginRight: 10,
        marginTop : 8,
        borderRadius: 5,
        elevation: 2,
    },
    receiveMsgStyle:{
        backgroundColor: COLORS.white,
        padding: 5,
        alignSelf: 'flex-start',
        width: '70%',
        marginLeft: 10,
        marginTop : 8,
        borderRadius: 5,
        elevation: 2,
    },
    inputStyle:{
        borderWidth: 1,
        padding: 5,
        width: '85%',
        borderRadius: 8,
        borderColor: COLORS.gray,
    }
})
export default ChatbotScreen;