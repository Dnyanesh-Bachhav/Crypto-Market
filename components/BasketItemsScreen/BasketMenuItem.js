import react from 'react';
import {View,Text,StyleSheet,Image} from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { COLORS } from '../constants';
function BasketMenuItem({name, percentage, imgSrc, price }){
    const per_color = percentage > 0 ? COLORS.success : COLORS.red;

    return(
        <View style={styles.container}>
            <View style={{justifyContent: 'center', alignItems: 'center'}} >
                <Image 
                    source={{
                        uri: imgSrc
                    }}
                    style={styles.imgStyle}
                />
            </View>
            <View style={styles.coinName}>
                <Text>{name}</Text>
                <Text>{"btc".toUpperCase()}</Text>
            </View>
            <Text style={styles.coinPrice}>₹{ price || 3200000}</Text>
            <View style={{backgroundColor: percentage > 0 ? COLORS.lightGreen : COLORS.lightRed, ...styles.coinPercentage}}>
                {console.log("Percentage of coin: "+percentage)}
                <Text style={{color: per_color,fontWeight: 'bold' }}>{percentage}%</Text>
                <AntDesign name={percentage > 0 ? "caretup" : "caretdown"} size={16} color={per_color} />
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
        paddingBottom: 10,
        marginTop: 5
    },
    imgStyle:{
        width: 45,
        height:  45,
        borderRadius: 50,
        marginTop: 3
    },
    coinName:{
        paddingLeft: 10,
        justifyContent: 'center',
        flex: 1
    },
    coinPrice:{
        justifyContent: 'center',
        // marginLeft: 'auto',
        textAlign: 'right',
        // borderWidth: 1,
        marginRight: 10,
        flex: 1
    },

    coinPercentage:{
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical: 8,
        borderRadius: 5,
        fontWeight: 'bold',
        // marginLeft: 'auto',
        flex: 1
    }
});
export default BasketMenuItem;