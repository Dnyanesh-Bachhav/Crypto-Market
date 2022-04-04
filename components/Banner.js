import React from 'react';
import {View,Text,StyleSheet,Dimensions} from 'react-native';
import {COLORS} from './constants';
const BANNER_HEIGHT = Dimensions.get('window').height/6;

function Banner(){
  return(
    <View style={styles.container}>
        <Text>Banner</Text>
        <View style={styles.bannerDotsView} >
            <View style={styles.bannerDot}></View>
            <View style={styles.bannerDot}></View>
            <View style={styles.bannerDot}></View>
            <View style={styles.bannerDot}></View>
            <View style={styles.bannerDot}></View>
        </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container:{
    width: '94%',
    height: BANNER_HEIGHT,
    backgroundColor: COLORS.gray,
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    marginTop: 10,
    overflow: 'hidden'
  },
  bannerDotsView:{
    position: 'absolute',
    bottom: 2,
    width: '100%',
    height: 12,
    backgroundColor: COLORS.gray,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  bannerDot:{
    width: 8,
    height: 8,
    backgroundColor:COLORS.white,
    marginLeft: 5,
    borderRadius: 50
  }
});
export default Banner;