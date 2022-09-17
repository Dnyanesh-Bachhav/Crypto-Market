import { Text, View, StyleSheet, Image, Dimensions, ScrollView, TouchableOpacity, Linking } from "react-native";
import { Ionicons } from '@expo/vector-icons';
const CARD_HEIGHT = Dimensions.get('window').height / 5;
const CARD_WIDTH = Dimensions.get('window').width / 3;
import {COLORS} from '../components/constants.js';
import Button from "../components/Button.js";
function DetailNewsScreen({ route }) {
    // console.log(route.params.title);
    
    async function handleClick(url) {
        let canOpen = Linking.canOpenURL(url);
        if (canOpen) {
            await Linking.openURL(url);
        }
        else {
            Alert.alert("Can't Open this URL...");
        }
    }
    return (
        <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
            {/* sourceName, imageUrl, title, author, description, url, publishedAt, content */}
            <Text style={styles.titleStyle}>{route.params.title}</Text>
            <Image source={{
                uri: route.params.imageUrl
            }} style={styles.imgStyle} />
            <Text style={styles.sourceNameStyle}>{route.params.sourceName}</Text>
            <Text style={styles.descriptionStyle}>{route.params.description}</Text>
            <View style={styles.contentStyle}>
                <Text style={{fontSize: 16}}>{route.params.content}</Text>
            <TouchableOpacity  onPress={() => {
                handleClick(route.params.url);
            }} style={styles.readMoreStyle} >
                <Text style={{color: COLORS.primary,fontSize: 16}} >Read more...</Text>
                <Ionicons name="open-outline" size={21} color="black" style={{color: COLORS.primary}} />
            </TouchableOpacity>
            </View>
            {
                route.params.author != null ? <><Text style={{fontSize: 16}} ><Text style={styles.authorStyle} >Author:</Text>  {route.params.author}</Text></> : null
            }
            
                <Text style={{fontSize: 16}}><Text style={styles.authorStyle} >Published At: </Text> {route.params.publishedAt}</Text>

                
            <TouchableOpacity style={styles.buttonStyle} onPress={
                  ()=>{
                    handleClick(route.params.url);     
                  }
                } >
            <Text style={styles.buttonText}>Read More...</Text>
            </TouchableOpacity>
        </ScrollView>
    );
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10
    },
    imgStyle: {
        width: '100%',
        height: CARD_HEIGHT,
        resizeMode: 'cover',
        borderRadius: 12,
        marginVertical: 8
    },
    contentStyle:{
       
        flexDirection: 'row',
        flexWrap: 'wrap',
        tintColor: COLORS.red,
        color: COLORS.primary,
        marginTop: 4,
        fontSize: 15
        // display: 'inline-flex',
        // width: CARD_WIDTH,
    },
    readMoreStyle:{
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 18,
        fontSize: 16
    },
    titleStyle: {
        fontWeight: '700',
        textAlign: 'left',
        fontSize: 22,
        marginBottom: 10,
    },
    sourceNameStyle:{
        color: COLORS.red,
        fontWeight: 'bold',
        fontSize: 20,
        marginVertical: 5 
    },
    authorStyle:{
        color: COLORS.red,
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 5
    },
    descriptionStyle:{
        fontSize: 16,
    },
    buttonStyle:{
        padding: 10,
        paddingHorizontal: 15,
        alignSelf: 'center',
        elevation: 25,
        backgroundColor: COLORS.primary,
        borderRadius: 8,
        width: '60%',
        marginTop: 40,
        marginBottom: 50
    },
    buttonText:{
        color: COLORS.white,
        fontWeight: '600',
        fontSize: 22,
        textAlign: 'center'
    }
})

export default DetailNewsScreen;