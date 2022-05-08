import { Text, View, StyleSheet, TouchableOpacity } from "react-native";
import { COLORS } from "../constants";

function Button({button_text,backColor})
{
    return(
        <View style={styles.container}>
            <View style={{...styles.buttonStyle,backgroundColor: backColor, shadowColor: backColor}}>
                <Text style={styles.buttonText}>{button_text}</Text>
            </View>
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
        width: '100%',
        paddingHorizontal: 25,
    },
    buttonText:{
        color: COLORS.white,
        fontWeight: '600',
        fontSize: 22,
        textAlign: 'center',

    }
})

export default Button;