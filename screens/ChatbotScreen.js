import { ActivityIndicator, Alert, FlatList, StyleSheet, Text, TextInput, TouchableOpacity, View, messageIdGenerator } from "react-native";
import { COLORS } from "../components/constants";
import { MaterialIcons } from '@expo/vector-icons';
import { useCallback, useEffect, useState } from "react";
import Header from "../components/ChatbotScreen/Header";
import { Configuration, OpenAIApi } from "openai";
import { Bubble, GiftedChat } from 'react-native-gifted-chat';
import { FontAwesome } from '@expo/vector-icons';
import axios from "axios";
const API_KEY = "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";
import 'react-native-get-random-values';
import { v4 as uuidv4 } from "uuid";
import { getChatbotReply1 } from "../Services/requests";

const API_URL = "https://coinstack-backend.vercel.app/api";

// Chatbot Screen powered by ChatGPT
const configuration = new Configuration({
    apiKey: API_KEY,
  });
const openai = new OpenAIApi(configuration);

const BOT = {
    _id: 2,
    name: 'Jarvis',
    avatar: require("../assets/robot1.jpg")
  };

function ChatbotScreen(){
    const [text,setText] = useState("");
    const [messages, setMessages] = useState([]);
    const [data, setData] = useState();
    const [loading,setLoading] = useState(false);

    const getChatbotReply = async (message)=>{
        if(loading)
        {
            return;
        }
        setLoading(true);
        let reply = "";
            axios.post("https://coinstack-backend.vercel.app/api/hello",
                {message},
                // { headers: {"Content-Type": "application/json"}}
            ).then((response)=>{
                console.log(JSON.stringify(response));
                console.log(typeof response);
                const d1 = response;
                console.log("hi"+d1.data.result);
                setData(d1.data.result.trim());
                console.log("Actual data: "+data);
                reply = d1.data.result.trim();
                return d1.data.result;
            }).catch((e)=>{
                    console.log("Error: "+e);
                    Alert.alert("Something went wrong!");
            }).finally(()=>{
                    setLoading(false);
                    // return data;
                    let message = {
                        _id: uuidv4(),
                        text: reply,
                        createdAt: new Date(),
                        user: {
                          _id: 2,
                          name: 'React Native',
                          avatar: require("../assets/robot1.jpg")
                        },
                      };
                      setMessages(previousMessages => GiftedChat.append(previousMessages, [message]));
                      setData(null);
            });
            // console.log("Reply from chatbott:"+ d1.result);
            // setData(d1.result);

        
        

    };
    // console.log("Chatbot Data: "+data);
    const handleBotResponse = async (msg)=>{
        const response = await getChatbotReply(msg);
        console.log("response:"+response);
        
        // let message = {
        //     _id: messages.length + 1,
        //     text: response,
        //     createdAt: new Date(),
        //     user: BOT,
        // }
        // setMessages(previousMessages => GiftedChat.append(previousMessages, [message]));


    }
    const onSend = useCallback( async (messages = []) => {

        console.log("Data12:"+ JSON.stringify(messages));
        setMessages(previousMessages => GiftedChat.append(previousMessages, messages));
        await getChatbotReply(messages[0].text);
        
        // setMessages(previousMessages => GiftedChat.append(previousMessages, messages));
      }, []);
    
    const renderBubble = (props)=>{
        return(
            <>
            {/* {
                loading && <ActivityIndicator size={"small"} color={COLORS.black} />
            } */}
            <Bubble
            {...props}
            wrapperStyle={{
                right:{
                    backgroundColor: COLORS.purple,
                    padding: 5,
                    borderRadius: 5,
                    elevation: 2,
                },
                left:{
                    backgroundColor: COLORS.white,
                    padding: 5,
                    borderRadius: 5,
                    elevation: 2,
                }
            }}
            textStyle={{
                right:{
                    color: COLORS.gray,
                },
                left:{
                    color: COLORS.gray,
                }
            }}
            
            />
            </>
            );
    }
    const scrollToBottomComponent = ()=>{
        return(
            <FontAwesome name="angle-double-down" size={24} color="black" />
        );
    }
    const getData1 = async()=>{
        let data = await getChatbotReply1("Hi");
        console.log("Data: "+data);
    }
            
    useEffect( ()=>{
        // openai.createCompletion({
        //     model: 'text-davinci-002',
        //     prompt: "Hi",
        //     temperature: 0.7,
        //     max_tokens: 256,
        // }).then((response)=>{
        //     console.log("HI there:"+ response.data.choices[0].text);
        //     setText(response.data.choices[0].text);
            
        // });
        setMessages([
            {
              _id: 1,
              text: 'Hello developer',
              createdAt: new Date(),
              user: {
                _id: 2,
                name: 'React Native',
                avatar: require("../assets/robot1.jpg")
              },
            },
            {
                _id: 2,
                text: 'Hello World...!!!',
                createdAt: new Date(),
                user: {
                  _id: 1,
                  name: 'React Native',
                  avatar: 'https://placeimg.com/140/140/any',
                },
              },
          ]);
          getData1();
    },[]);
    return(
        <View style={styles.container}>
            <Header headerText={"Chatbot"} />
            {/* <FlatList 
            data={messages}
            renderItem={({item,index})=>(
                
                (item.messageType === 'user') ? <SentMessage messageText={item.text} /> : <ReceiveMessage messageText={item.text} />
            )}
            keyExtractor={({item,index})=> index}
            /> */}
            <GiftedChat
                messages={messages}
                onSend={messages => onSend(messages)}
                user={{
                    _id: 1,
                }}
                renderBubble={renderBubble}
                onQuickReply={(msg)=>{
                    // console.log("reply from bot..."+msg);
                }}
                scrollToBottom
                scrollToBottomComponent={scrollToBottomComponent}
                // textInputStyle={{
                //     borderWidth: 1,
                //     padding: 5,
                //     borderRadius: 8,
                //     borderColor: COLORS.grey,
                // }}
            />
            
            {/* <InputMessage text={text} setText={setText} messages={messages} setMessages={setMessages} /> */}
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