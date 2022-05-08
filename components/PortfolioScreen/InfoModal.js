import react from "react";
import {View,Text,StyleSheet,TouchableOpacity} from 'react-native';
import { AntDesign } from '@expo/vector-icons';
function InfoModal({ setVisible }){
    return(
        <View style={styles.container}>
            <Text style={{marginLeft: 10}} >Values in a portfolio are indicative...</Text>
            <TouchableOpacity onPress={()=>{
                setVisible(true);
            }} >
                <AntDesign name="infocirlceo" size={18} color="black" style={styles.iconStyle}/>
            </TouchableOpacity>
        </View>
    );
}
const styles = StyleSheet.create({
    container:{
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    iconStyle:{
        marginRight: 10
    }
});
export default InfoModal;