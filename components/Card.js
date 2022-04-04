import React from 'react';
import {View,Text,Image,StyleSheet,ScrollView,Dimensions} from 'react-native';
import { COLORS } from './constants';
const CARD_HEIGHT = Dimensions.get('window').height/5;
const CARD_WIDTH = Dimensions.get('window').width/3;
function Card({coinName,percentage}){
  return(
    <View style={styles.container}>
      <View style={styles.card}>
        <Image
        style={styles.imgStyle}
        source={require("../assets/MANA_Logo.jpg")}
        />
        <Text style={styles.coinNameText}>{coinName}</Text>
        <Text>₹21.12</Text>
        { percentage > 0 ?
        <Text style={styles.coinPercentage}>{percentage ? percentage: 20}%</Text>
        : <Text style={styles.coinPercentageRed}>{percentage ? percentage: 20}%</Text>
        }
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: CARD_HEIGHT,
    flex: 1,
    flexDirection: 'column',
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