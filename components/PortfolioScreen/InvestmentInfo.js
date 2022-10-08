import react from "react";
import {View,Text,StyleSheet} from 'react-native';
import { COLORS } from "../constants";
function InvestmentInfo({invested,current}){
    return(
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={{marginLeft: '5%', ...styles.textStyle}}>Current</Text>
                <Text style={{marginRight: '5%', ...styles.textStyle}}>Invested</Text>
            </View>
            <View style={styles.headerVal}>
                <Text style={{marginLeft: '5%', ...styles.headerTextStyle}}>₹{current}</Text>
                <Text style={{marginRight: '5%', ...styles.headerTextStyle}}>₹{invested}</Text>
            </View>

            <View style={styles.header}>
                <Text style={{marginLeft: '5%', ...styles.textStyle}}>Returns</Text>
                <Text style={{marginRight: '5%', ...styles.textStyle}}>Total Returns%</Text>
            </View>
            <View style={styles.headerVal}>
                <Text style={{marginLeft: '5%', ...styles.headerTextStyle}}>₹0</Text>
                <Text style={{marginRight: '5%', ...styles.headerTextStyle}}>0%</Text>
            </View>
        </View>
    );
}
const styles = StyleSheet.create({
    container:{
        width: '98%',
        backgroundColor: COLORS.white,
        padding: 10,
        borderRadius: 10,
        // borderColor: COLORS.grayDark,
        backgroundColor: COLORS.white,
        marginTop:15,
        marginBottom: 10,
        alignSelf: 'center',
        elevation: 5
    },
    textStyle:{
        color: COLORS.grayDark,
    },
    headerTextStyle:{
        color: COLORS.black,
    },
    header:{
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    headerVal:{
        
        flexDirection: 'row',
        justifyContent: 'space-between'
    }
});
export default InvestmentInfo;