import { useEffect, useState } from 'react';
import { View, Text, Image, StyleSheet, ScrollView, FlatList, Dimensions, TouchableOpacity, Linking, Alert, TextInput, ActivityIndicator } from 'react-native';
import { COLORS } from '../components/constants';
import { getAllNews } from '../Services/requestsNewsApi';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import Header from '../components/Header';
const CARD_HEIGHT = Dimensions.get('window').height / 5;
const CARD_WIDTH = Dimensions.get('window').width / 3;
function NewsScreen() {
    const [news, setNews] = useState([]);
    const [refreshing, setRefreshing ] = useState(false);
    const navigation = useNavigation();
    const [searchTerm, setSearchTerm] = useState("bitcoin");
    async function getNews(str) {
        setRefreshing(true);
        if (str == null)
            str = "bitcoin";
        const data = await getAllNews(str);
        let arr1 = [];
        data.articles.map((item, index) => {
            // array.push(item);
            // console.log(item.author);
            arr1.push(item);
        })
        arr1 = arr1.slice(0, 10);
        setNews(arr1);
        setRefreshing(false);
    }
    async function handleClick(url) {
        let canOpen = Linking.canOpenURL(url);
        if (canOpen) {
            await Linking.openURL(url);
        }
        else {
            Alert.alert("Can't Open this URL...");
        }
    }
    useEffect(() => {
        getNews(searchTerm);
    }, [searchTerm]);
    return (
            <>
            {/* <Header/> */}
        <View style={styles.container}>
            {/* <Text>NEWS SCREEN</Text> */}
            
            <TextInput
                placeholder="Search news"
                onSubmitEditing={(event) => {
                    console.log(event.nativeEvent.text);
                    setSearchTerm(event.nativeEvent.text);
                    // getNews()
                    
                }}


                style={styles.inputStyle}
            />
            {
                refreshing && <ActivityIndicator size={"small"} color={"black"} />
            }
            { news && <FlatList
                data={news}
                showsVerticalScrollIndicator={false}
                renderItem={({ item, index }) => (

                    <>
                    <TouchableOpacity onPress={()=>{
                        navigation.navigate("DetailNews",{
                            sourceName : item.source.name,
                            imageUrl : item.urlToImage,
                            title: item.title,
                            author: item.author,
                            description: item.description,
                            url: item.url,
                            publishedAt : item.publishedAt,
                            content : item.content

                        })
                    }}>
                        <View style={{width: '95%',
        padding: 10,
        marginLeft: 10,
        borderRadius: 10,
        borderColor: COLORS.grayDark,
        backgroundColor: COLORS.white,
        marginTop:15,
        elevation: 5}}>
                        <View key={index} style={styles.card} >
                            <Image source={{
                                uri: item.urlToImage
                            }} style={styles.imgStyle} />
                            <Text style={styles.titleStyle}>{item.title.toString().trim()}</Text>

                            <View style={styles.cardBottom}>
                                <Text style={styles.sourceStyle}>{item.source.name}</Text>
                                <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'flex-end', marginRight: 4 }} >

                                    <TouchableOpacity onPress={() => {
                                        handleClick(item.url);
                                    }}>
                                        <Ionicons name="open-outline" size={24} color="black" />
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </View>
                        </View>
                        </TouchableOpacity>
                    </>

                )
                }
                keyExtractor={(item, index) => index}
            /> }

        </View>
        </>
    );
}


const styles = StyleSheet.create({

    container: {
        flex: 1,
        height: '100%',
        // paddingHorizontal: 10,
        paddingTop: 10,
        justifyContent: 'center',
        alignItems: 'center'

    },
    imgStyle: {
        width: '100%',
        height: CARD_HEIGHT,
        resizeMode: 'cover',
        // borderWidth: 1,
        borderColor: COLORS.black,
        borderRadius: 12,
        marginBottom: 5

    },
    card: {
        width: '100%',
        // borderBottomWidth: 1,
        // borderBottomColor: COLORS.gray,
        marginBottom: 12,
        paddingBottom: 5,
        // borderWidth: 1.5,
        padding: 10,
        backgroundColor: COLORS.white,
    },
    titleStyle: {
        fontWeight: '700',
        fontSize: 18,
        textAlign: 'left'
    },
    cardBottom: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    sourceStyle: {
        fontSize: 16,
        fontWeight: 'bold',
        color: COLORS.grayDark,
    },
    inputStyle: {
        borderColor: COLORS.grayDark,
        borderWidth: 1.5,
        color: COLORS.black,
        borderRadius: 5,
        marginBottom: 20,
        backgroundColor: COLORS.white,
        padding: 10,
        width: '95%',
        alignSelf: 'center',
        elevation: 10
    }

})
export default NewsScreen;