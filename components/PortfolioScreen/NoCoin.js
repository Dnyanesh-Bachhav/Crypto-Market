import react from "react";
import LottieView from 'lottie-react-native';
import {View,Text,StyleSheet} from 'react-native';
import { COLORS } from "../constants";
import Button from "../Button";
function NoCoin(){
    return(
        <View style={styles.container}>
            <LottieView
                style={{
                    width: 100,
                    height: 250,
                }}
                source={require('../../assets/70780-no-result-found.json')}
                autoPlay
                loop
            />
            <Button style={{color: 'black' }} button_text={"Add new Asset..."}  />
        </View>
    );
}
const styles = StyleSheet.create({
    container:{
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical: 50,
        width: '100%',
    },
    textStyle:{
        fontSize: 24,
        color: COLORS.primary,
    }

});
export default NoCoin;