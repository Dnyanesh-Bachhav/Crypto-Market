import { Text, View, StyleSheet, TouchableOpacity } from "react-native";
import { COLORS } from "./constants";

function Button({button_text})
{
    return(
        <View style={styles.container}>
            <TouchableOpacity style={styles.buttonStyle} onPress={
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
        
        shadowColor: COLORS.primary,
        borderColor: "#000",
        alignItems: 'center'
    },
    buttonStyle:{
        padding: 10,
        elevation: 25,
        backgroundColor: COLORS.primary,
        borderRadius: 10,
        width: '60%',
    },
    buttonText:{
        color: COLORS.white,
        fontWeight: '600',
        fontSize: 22,
        textAlign: 'center'
    }
})

export default Button;