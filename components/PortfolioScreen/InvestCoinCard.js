import react from 'react';
import {View,Text,StyleSheet,Image} from 'react-native';
import { COLORS } from '../constants';
import { Feather } from '@expo/vector-icons';
function InvestCoinCard(){
    return(
        <View style={styles.container}>
            <View style={styles.title}>
                <Image
                    source={require("../../assets/MANA_Logo.jpg")}
                    style={styles.imgStyle}
                    />
                <Text style={styles.coinName}>Bitcoin</Text>
                <Feather name="arrow-right" size={24} color={COLORS.grayDark} style={styles.iconStyle}/>
            </View>
            <View style={styles.bottomSection}>
                <Text style={{color: COLORS.grayDark}}>Returns</Text>
                <Text style={{color: COLORS.success,fontWeight: 'bold'}} >₹1012</Text>
            </View>
        </View>
    );
}
const styles = StyleSheet.create({
    container:{
        width: '100%',
        borderWidth: 1,
        borderColor: COLORS.gray,
        marginTop: 16,
        borderRadius: 10,
    },
    imgStyle:{
        width: 45,
        height: 45
    },
    coinName:{
        color: COLORS.black,
        fontSize: 21,
        marginLeft: 8,
        fontWeight: '600'
    },
    title:{
        flexDirection: 'row',
        alignItems: 'center',
        padding: 10,
        borderBottomWidth: 1,
        borderBottomColor: COLORS.gray
    },
    iconStyle:{
        marginLeft: 'auto',
        padding: 5
    },
    bottomSection:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 10
    }
});
export default InvestCoinCard;