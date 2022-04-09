import react from "react";
import {View,Text,StyleSheet} from 'react-native';
import { COLORS } from "../constants";
function InvestmentInfo(){
    return(
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={{marginLeft: '5%', ...styles.textStyle}}>Current</Text>
                <Text style={{marginRight: '5%', ...styles.textStyle}}>Invested</Text>
            </View>
            <View style={styles.headerVal}>
                <Text style={{marginLeft: '5%', ...styles.headerTextStyle}}>₹10,000</Text>
                <Text style={{marginRight: '5%', ...styles.headerTextStyle}}>₹5000</Text>
            </View>

            <View style={styles.header}>
                <Text style={{marginLeft: '5%', ...styles.textStyle}}>Returns</Text>
                <Text style={{marginRight: '5%', ...styles.textStyle}}>Total Returns%</Text>
            </View>
            <View style={styles.headerVal}>
                <Text style={{marginLeft: '5%', ...styles.headerTextStyle}}>₹5,000</Text>
                <Text style={{marginRight: '5%', ...styles.headerTextStyle}}>50%</Text>
            </View>
        </View>
    );
}
const styles = StyleSheet.create({
    container:{
        width: '100%',
        borderWidth: 1,
        borderColor: COLORS.gray,
        padding: 10,
        marginTop: 10,
        borderRadius: 10,
        marginBottom: 10,
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