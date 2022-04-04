import React from 'react'; 
import {View,Text,Image,StyleSheet,StatusBar} from 'react-native';
import {COLORS} from './constants';
function Header(){
  return(
    <View style={styles.container}>
      <View style={{justifyContent: 'center'}}>
        <Image 
        style={styles.imgStyle}
        source={require('../assets/coinmarketcap-logo.png')}
        />
      </View>
    <Text style={styles.textStyle}>CoinStack</Text>
    </View>
  );
}
const styles = StyleSheet.create({
  container:{
    flexDirection: 'row',
    backgroundColor: COLORS.primary,
    padding: 5,
  },
  textStyle:{
    color: "#fff",
    fontSize: 24,
    fontWeight: '600',
    marginLeft: 10,
    paddingVertical: 5
  },
  imgStyle:{
    width: 24,
    height: 24,
    resizeMode: 'contain',
    justifyContent:'center',
    alignContent: 'center'
  }
})
export default Header;