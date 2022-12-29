import { FlatList, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import { COLORS } from "../components/constants";
import { Feather } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { useEffect, useState } from "react";
import Header from "../components/ChatbotScreen/Header";
import { Configuration, OpenAIApi } from "openai";
const API_KEY = "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";

// Chatbot Screen powered by ChatGPT
const configuration = new Configuration({
    apiKey: API_KEY,
  });
const openai = new OpenAIApi(configuration);

function ChatbotScreen(){
    const [text,setText] = useState("");
    const [ messages, setMessages ] = useState(["0"]);

    
            
    useEffect( ()=>{
        openai.createCompletion({
            model: 'text-davinci-002',
            prompt: "Hi",
            temperature: 0.7,
            max_tokens: 256,
        }).then((response)=>{
            console.log("HI there:"+ response.data.choices[0].text);
            setText(response.data.choices[0].text);
            
        });
    },[]);
    return(
        <View style={styles.container}>
            <Header headerText={"Chatbot"} />
            <FlatList 
            data={messages}
            renderItem={({item,index})=>(
                
                (item.messageType === 'user') ? <SentMessage messageText={item.text} /> : <ReceiveMessage messageText={item.text} />
            )}
            keyExtractor={({item,index})=> index}
            />
            <InputMessage text={text} setText={setText} messages={messages} setMessages={setMessages} />
        </View>
    );
}

function SentMessage({messageText}){
    return(
        <>
        <View style={styles.sentMsgStyle}>
            <Text style={{color: COLORS.white, }} >{messageText}</Text>
        </View>
        <Text style={{alignSelf:'flex-end',marginRight: 10, color: COLORS.grey, fontSize: 10 }}>Sent 4:20PM</Text>
        </>
    );
}

function ReceiveMessage({messageText}){
    return(
        <>
        <View style={styles.receiveMsgStyle} >
            <Text style={{color: COLORS.grey, }} >{messageText}</Text>
        </View>
        <Text style={{alignSelf:'flex-start',marginLeft: 10, color: COLORS.grey, fontSize: 10 }}>4:22PM</Text>
        </>

    );
}

function InputMessage({text,setText,messages,setMessages}){
   async function handleInputMessage()
    {

        let arr = messages;
        console.log("Type: "+typeof messages);
        arr.push({text, messageType: "user"});
        setMessages(arr);
        const response = await getChatGPTResponse(text);
        console.log("Response: "+response);
        // setText(response);
        arr.push({ response, messageType: "chatbot" });
        setMessages(arr);
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