import react from "react";
import {View,Text,StyleSheet} from 'react-native';
import RBSheet from "react-native-raw-bottom-sheet";
import { COLORS } from "../constants";
import Button from "./Button";
function BottomSheet({refRBSheet,coinName,price,coin}){
    console.log("Refsheet: "+refRBSheet);
    return(
        <View style={styles.container}>

        </View>
    );
}
const styles = StyleSheet.create({
    container:{

    },
    btnGroup:{
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        padding: 10,
        borderWidth: 1,
    },
});
export default BottomSheet;