import React from 'react'; 
import {View,Text,Image,StyleSheet,StatusBar,TouchableOpacity} from 'react-native';
import {COLORS} from './constants';
import { AntDesign } from '@expo/vector-icons';
function Header(){
  return(
    <View style={styles.container}>
      <View style={{justifyContent: 'center'}}>
        {/* App Logo */}
        <Image 
          style={styles.imgStyle}
          source={require('../assets/coinmarketcap-logo.png')}
        />
      </View>
      <Text style={styles.textStyle}>CoinStack</Text>
      <View style={styles.iconStyle}>
        <TouchableOpacity>
          {/* Add Element */}
          {/* <AntDesign name="caretdown" size={21} color={COLORS.white}/> */}
        </TouchableOpacity>
      </View>

    </View>
  );
}
const styles = StyleSheet.create({
  container:{
    flexDirection: 'row',
    backgroundColor: COLORS.primary,
    paddingHorizontal: 10,
    paddingVertical: 5
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
  },

  iconStyle:{
    justifyContent: 'center',
    alignItems:'center',
    marginLeft: 'auto'
  }
})
export default Header;
