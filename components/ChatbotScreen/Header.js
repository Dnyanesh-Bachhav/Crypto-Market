import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { COLORS } from "../constants";
import { AntDesign } from '@expo/vector-icons';
import { useNavigation } from "@react-navigation/native";
import { MaterialIcons } from '@expo/vector-icons';
function Header({ headerText }) {
    const navigation = useNavigation();
    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={() => {
                navigation.goBack();
            }} >
                <AntDesign name="arrowleft" size={24} color={COLORS.white} />
            </TouchableOpacity>
            <Text style={{ color: COLORS.white, fontSize: 21, marginLeft: 10 }}>{headerText}</Text>
            <TouchableOpacity onPress={() => {
            }}>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        // justifyContent: 'center',
        alignItems: 'center',
        paddingVertical: 10,
        paddingLeft: 10,
        backgroundColor: COLORS.primary,
    }
})
export default Header;