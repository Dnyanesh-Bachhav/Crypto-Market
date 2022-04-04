import react from "react";
import {View,Text,StyleSheet} from 'react-native';
function PortfolioScreen(){
    return(
        <View style={styles.container}>
            <Text>Hello there it is Portfolio Screen...</Text>
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
export default PortfolioScreen;