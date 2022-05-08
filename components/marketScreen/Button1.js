import react from "react";
import { Text, View, StyleSheet, TouchableOpacity } from "react-native";
import { COLORS } from "../constants";
import {useNavigation} from '@react-navigation/native';
function Button1({button_text,backColor,name,price,symbol,imgSrc,screenName}) 
{
    const navigation = useNavigation();
    return(
        <View style={styles.container}>
            <TouchableOpacity style={{...styles.buttonStyle,backgroundColor: backColor, shadowColor: backColor}} onPress={()=>{
                navigation.navigate(screenName,{
                    name: name,
                    price: price,
                    symbol: symbol,
                    imgSrc: imgSrc
                })
            }} >
                <Text style={styles.buttonText}>{button_text}</Text>
            </TouchableOpacity>
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        
        borderColor: "#000",
        alignItems: 'center'
    },
    buttonStyle:{
        padding: 10,
        elevation: 10,
        borderRadius: 10,
        width: '100%',
        paddingHorizontal: 25,
    },
    buttonText:{
        color: COLORS.white,
        fontWeight: '600',
        fontSize: 22,
        textAlign: 'center',

    }
})

export default Button1;