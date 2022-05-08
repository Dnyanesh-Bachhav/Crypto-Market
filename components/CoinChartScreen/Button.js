import { Text, View, StyleSheet, TouchableOpacity } from "react-native";
import { COLORS } from "../constants";

function Button({button_text,backColor})
{
    return(
        <View style={styles.container}>
            <TouchableOpacity style={{...styles.buttonStyle,backgroundColor: backColor, shadowColor: backColor}} onPress={
                  ()=>{
                    console.log("Hello there...");
                  }
                } >
            <Text style={styles.buttonText}>{button_text}</Text>
            </TouchableOpacity>
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        
        borderColor: "#000",
        alignItems: 'center'
    },
    buttonStyle:{
        padding: 10,
        elevation: 10,
        borderRadius: 10,
    },
    buttonText:{
        color: COLORS.white,
        fontWeight: '600',
        fontSize: 22,
        paddingHorizontal: 25,
        textAlign: 'center'
    }
})

export default Button;