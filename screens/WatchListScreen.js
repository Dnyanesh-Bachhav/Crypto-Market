import { StyleSheet, Text, View } from "react-native";
import LottieView from 'lottie-react-native';
import { Image } from "react-native";

function WatchListScreen(){
    return(
        <View style={styles.container}>
            {/* <Text>Hi there it is watchlist screen</Text> */}
            <Text style={{ fontSize: 20}}><Text style={{fontWeight: 'bold', fontSize: 24}}>Boss:</Text> Data kidhar hein?</Text>
            
            <Text style={{ fontSize: 20, justifyContent:'center',alignItems:'center'}}><Text style={{fontWeight: 'bold', fontSize: 24}}>Me:</Text> Cloud se aa raha he sir... abhi</Text>
            <Text style={{ fontSize: 20, justifyContent:'center',alignItems:'center'}}>aayega😥</Text>
            <Text style={{ fontSize: 20, fontWeight: 'bold', marginTop: 5 }}>Le cloud:</Text>
            {/* <LottieView
                autoPlay
                style={{
                  width: "100%",
                  height: "72%",
                  alignSelf: 'center',
                }}
                
                source={require("../assets/122344-funny-cloud.json")}
                speed={0.7}
              /> */}
              <Image source={require("../assets/122344-funny-cloud.gif")} style={{
                width: '100%',
                height: '60%'
              }} />
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
export default WatchListScreen;