import React from 'react';
import {View,Text,StyleSheet} from 'react-native';
import { COLORS } from '../constants';
function TableHeader(){
    return(
        <View style={styles.container}>
            <View style={styles.tableHeader}>
                <Text style={{textAlign: 'right',...styles.thead}}>COINS NAME</Text>
                <Text style={{textAlign: 'right',...styles.thead}}>PRICE</Text>
                <Text style={{textAlign: 'right',...styles.thead}}>PERCENTAGE</Text>
            </View>
        </View>
    );
}
const styles = StyleSheet.create({
    container:{
        padding: 10,
        // backgroundColor: COLORS.gray
    },
    tableHeader:{
        color: COLORS.gray,
        flexDirection: 'row',
        // justifyContent: 'space-evenly'
    },
    thead:{
        color: COLORS.grayDark,
        fontSize: 12,
        flex: 1,
        // borderWidth: 1
    }
});
export default TableHeader;