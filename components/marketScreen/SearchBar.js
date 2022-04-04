import react from "react";
import {View,Text,StyleSheet,TextInput} from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { COLORS } from "../constants";
function SearchBar(){
    return(
        <View style={styles.container}>
            <FontAwesome name="search" size={24} color={COLORS.grayDark}/>
            <TextInput placeholder="Search coins..." style={styles.textInput}/>
        </View>
    );
}
const styles = StyleSheet.create({
    container:{
        width: '100%',
        alignSelf: 'center',
        borderColor: COLORS.gray,
        borderWidth: 1,
        borderRadius: 10,
        padding: 8,
        alignItems: 'center',
        marginTop: 10,
        flexDirection: 'row'
    },
    textInput:{
        marginLeft: 5,
        paddingVertical: 5,
        fontSize: 15
    }
});

export default SearchBar;