import { StyleSheet, Text, View } from "react-native";
import { COLORS } from "../constants";

function ListComponent({ name, value, valueText }) {
    return (
        <View style={styles.container}>
            <View style={styles.itemStyle}>
                <Text style={{fontSize: 15,color: COLORS.black}} >{name}</Text>
                <Text style={{fontSize: 18,color: COLORS.brown,fontWeight: 'bold'}} >{valueText}</Text>
            </View>
            <View style={styles.valueStyle}>
                <Text style={{fontSize: 21,color: COLORS.white}} >{value}</Text>
            </View>
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        marginBottom: 10,
        paddingBottom: 5,
        borderBottomWidth: 1,
        borderBottomColor: COLORS.gray,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    itemStyle: {
        marginBottom: 10,
    },
    valueStyle:{
        backgroundColor: COLORS.brown,
        borderRadius: 50,
        width: 50,
        height: 50,
        justifyContent: 'center',
        alignItems: 'center'
    }
});
export default ListComponent;