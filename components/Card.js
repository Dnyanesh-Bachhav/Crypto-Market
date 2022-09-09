import React from 'react';
import {View,Text,Image,StyleSheet,ScrollView,Dimensions,TouchableOpacity} from 'react-native';
import { COLORS } from './constants';
const CARD_HEIGHT = Dimensions.get('window').height/5;
const CARD_WIDTH = Dimensions.get('window').width/3;
import {useNavigation} from '@react-navigation/native';
function Card({coinName,percentage,price,coinId,imgUrl }){
  const navigation = useNavigation();
  return(
    <View style={styles.container}>
      <TouchableOpacity onPress={()=>{
        console.log("CoinName: "+percentage);
        navigation.navigate("coinDetails",{
          coin: coinName,
          coinId: coinId,
          imgUrl: imgUrl || "https://assets.coingecko.com/coins/images/1/large/bitcoin.png?1547033579"
        });
      }} >
        
      <View style={styles.card}>
        <Image
        style={styles.imgStyle}
        source={{
          uri: imgUrl || "https://assets.coingecko.com/coins/images/1/large/bitcoin.png?1547033579"
        }}
        // source={require("../assets/MANA_Logo.jpg")}
        />
        <Text style={styles.coinNameText} numberOfLines={1}>{coinName}</Text>
        <Text>₹{price ? price : 500 }</Text>
        { percentage > 0 ?
        <Text style={styles.coinPercentage}>{percentage.toFixed(2)}%</Text>
        : <Text style={styles.coinPercentageRed}>{Number.parseFloat(percentage).toFixed(2)}%</Text>
        }
      </View>
      </TouchableOpacity>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: CARD_HEIGHT,
    flex: 1,
    flexDirection: 'column',
    elevation: 5
  },
  card:{
    backgroundColor: COLORS.white,
    width: CARD_WIDTH,
    borderRadius: 12,
    marginLeft: 10,
    paddingLeft: 8,
    paddingVertical: 10
  },
  imgStyle: {
    width: 50,
    height: 40,
    alignSelf: 'flex-start',
    resizeMode: 'contain',
    marginTop: 5
  },
  coinNameText:{
    color: '#000',
    textAlign: 'left',
    fontWeight: 'bold',
  },
  coinPercentage:{
    color: 'green',
    fontWeight: 'bold',
    fontSize: 21
  },
  coinPercentageRed:{
    color: 'red',
    fontWeight: 'bold',
    fontSize: 21
  }
})
export default Card;