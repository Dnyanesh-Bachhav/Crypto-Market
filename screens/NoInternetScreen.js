import react from "react";
import {View,Text,StyleSheet,StatusBar} from 'react-native';
import LottieView from 'lottie-react-native';
import Button from "../components/Button";
import Header from "../components/Header";
import {COLORS} from '../components/constants';
function NoInternetScreen(){
    return(
        <View style={styles.container}>
              <Header/>
              <LottieView
                autoPlay
                style={{
                  width: "100%",
                  height: "72%",
                  alignSelf: 'center',
                }}
                
                source={require("../assets/77124-nointernet.json")}
                speed={0.7}
              />
             <Text style={styles.connectionText}>Check your connection...</Text>
             <Button button_text="Refresh" />
            
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.secondary
    },
    connectionText:{
      color: COLORS.primary,
      fontSize: 25,
      fontWeight: '700',
      marginBottom: 40,
      marginTop: -20,
      textAlign: 'center'
  }
});

export default NoInternetScreen;