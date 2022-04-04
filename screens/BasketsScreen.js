import react from "react";
import {View,Text,StyleSheet} from 'react-native';
function BasketsScreen(){
    return(
        <View style={styles.container}>
            <Text>Hello it is Baskets Screen...</Text>
        </View>
    );
}
const styles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent:'center',
        alignItems: 'center'
    }
})
export default BasketsScreen;