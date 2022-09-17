import { useEffect, useState } from 'react';
import { View, Text, Image, StyleSheet, ScrollView, FlatList, Dimensions, TouchableOpacity, Linking, Alert } from 'react-native';
import { COLORS } from '../components/constants';
import { getAllNews } from '../Services/requestsNewsApi';
import { Ionicons } from '@expo/vector-icons';
const CARD_HEIGHT = Dimensions.get('window').height/5;
const CARD_WIDTH = Dimensions.get('window').width/3;
function NewsScreen() {
    const [news,setNews] = useState([]);
    async function getNews(){
        const data = await getAllNews();
        let arr1 = [];
        data.articles.map((item,index)=>{
            // array.push(item);
            console.log(item.author);
            arr1.push(item);
          })
        arr1 = arr1.slice(0,10);
        setNews(arr1);
    }
    async function handleClick(url){
        let canOpen = Linking.canOpenURL(url);
        if(canOpen)
        {
            await Linking.openURL(url);
        }
        else{
            Alert.alert("Can't Open this URL...");
        }
    }
    useEffect(()=>{
        getNews();
    },[]);
    return (
        <View style={styles.container}>

        <Text>NEWS SCREEN</Text>
        <ScrollView>
            <FlatList
            data={news}
            showsVerticalScrollIndicator={false}
            renderItem={({item,index})=>(

                
                <View key={index} style={styles.card} >
                        <Image source={{
                            uri: item.urlToImage
                        }} style={styles.imgStyle} />
                        <Text style={styles.sourceStyle}>{item.source.name}</Text>
                        <Text style={styles.titleStyle}> {item.title}</Text>

                        <View style={styles.cardBottom}>
                            <TouchableOpacity onPress={()=>{
                                handleClick(item.url);
                            }}>
                                <Ionicons name="open-outline" size={24} color="black" />
                            </TouchableOpacity>
                        </View>
                </View>
                
            )
            }
            keyExtractor={(item,index)=>index}
            />
            
        </ScrollView>
        </View>
    );
}


const styles = StyleSheet.create({

    container:{
        flex: 1,
        height: '100%',
        marginHorizontal: 10,

    },
    imgStyle:{
        width: '100%',
        height: CARD_HEIGHT,
        resizeMode: 'cover',
        
        borderRadius: 12

    },
    card:{
        width: '100%',
        borderBottomWidth: 1,
        borderBottomColor: COLORS.gray,
        marginBottom: 12,
        paddingBottom: 5
    },
    titleStyle:{
        fontWeight: '700',
        textAlign: 'left'
    },
    cardBottom:{
        flexDirection: 'row',
    },
    sourceStyle:{
        fontSize: 21,
        fontWeight: 'bold',
        color: COLORS.primary,
    }
})
export default NewsScreen;