import react from "react";
import {View,Text,StyleSheet,ScrollView} from 'react-native';
import BasketsItem from "../components/BasketsScreen/BasketItem";
function BasketsScreen(){
    return(
        <View style={styles.container}>
            <ScrollView style={{width: '100%'}}
            contentContainerStyle={{alignItems: 'center',paddingBottom: 20}}
            showsVerticalScrollIndicator={false} >
                <BasketsItem name="High Volume" description="Highly traded coins in last 24h" />
                <BasketsItem name="High Profit coins" description="Highly profitable coins in last 24h" />
                <BasketsItem name="High Loss coins" description="Coins which are corrected more in last 24h" />
                <BasketsItem name="Trusted Coins" description="Trustworthy coins" />
                <BasketsItem name="Meme Coins" description="Meme coins highly volatile" />
            </ScrollView>
        </View>
    );
}
const styles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent:'center',
        alignItems: 'center',     // To center item on x-axis
        
    }
})
export default BasketsScreen;