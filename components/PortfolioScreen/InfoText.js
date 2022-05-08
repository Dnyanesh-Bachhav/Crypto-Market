import react from "react";
import {View,Text,StyleSheet} from 'react-native';
import { COLORS } from "../constants";
function InfoText(){
    return(
        <View style={ styles.container }>
              <Text style={ styles.textHeader}>Things to keep in mind!</Text>
              <Text style={ styles.textStyle}>All the values are indicative. All your invetments are virtual...Investments profit and losses teaches you about the market. Try to make more profits from your investments that will allow you to push your rank... </Text>
              <Text style={ styles.textBottom}>--CoinStack</Text>
        </View>
    );
}
const styles = StyleSheet.create({
    container:{
        padding: 10,
    },
    textHeader:{
        fontSize: 18,
        fontWeight: 'bold',
        paddingVertical: 5
    },
    textBottom:{
        fontSize: 18,
        fontWeight: 'bold',
        paddingVertical: 5,
        alignSelf: 'flex-end',
        marginRight: 10,
        bottom: 0,
        color: COLORS.black,

    },
    textStyle:{
        fontSize: 15,
        color: COLORS.black,
    }
});
export default InfoText;