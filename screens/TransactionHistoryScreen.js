import { StyleSheet, Text, View } from "react-native";

function TransactionHistoryScreen(){
    return(
        <View style={styles.container}>
            <Text style={{fontSize: 20}} >Transaction History Screen...</Text>
        </View>
    );
}
const styles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})
export default TransactionHistoryScreen;