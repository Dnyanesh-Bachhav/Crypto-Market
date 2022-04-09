import React from "react";
import {View,Text,StyleSheet,Image} from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { COLORS } from "../constants";
function CoinItem({coinName,symbol,current_price,uri,price_change_percentage_24h}){
    
    const per_color = price_change_percentage_24h > 0 ? COLORS.success : COLORS.red;
    return(
        <View style={styles.container}>
            <View style={{justifyContent: 'center', alignItems: 'center'}} >
                <Image 
                    source={{
                        uri: uri
                    }}
                    style={styles.imgStyle}
                />
            </View>
            <View style={styles.coinName}>
                <Text>{coinName}</Text>
                <Text>{symbol.toUpperCase()}</Text>
            </View>
            <Text style={styles.coinPrice}>₹{current_price}</Text>
            <View style={{backgroundColor: price_change_percentage_24h > 0 ? COLORS.lightGreen : COLORS.lightRed, ...styles.coinPercentage}}>
                <Text style={{color: per_color,fontWeight: 'bold' }}>{price_change_percentage_24h.toFixed(2)}%</Text>
                <AntDesign name={price_change_percentage_24h > 0 ? "caretup" : "caretdown"} size={16} color={per_color} />
            </View>
        </View>
    );
}
const styles = StyleSheet.create({
    container:{
        flexDirection: 'row',
        alignItems: 'center',
        borderBottomWidth: 1,
        borderBottomColor: COLORS.gray,
        paddingBottom: 10
    },
    imgStyle:{
        width: 45,
        height:  45,
        borderRadius: 50,
        marginTop: 3
    },
    coinName:{
        paddingLeft: 10,
        justifyContent: 'center'
    },
    coinPrice:{
        justifyContent: 'center',
        marginLeft: 'auto',
    },

    coinPercentage:{
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 8,
        borderRadius: 5,
        fontWeight: 'bold',
        marginLeft: 'auto'
    }
});
export default CoinItem;