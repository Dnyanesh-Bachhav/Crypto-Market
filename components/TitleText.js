import React from 'react';
import {View,Text,StyleSheet} from 'react-native';
import { COLORS } from './constants';
function TitleText({title,descriptionText}){
  return(
    <View style={styles.container}>
      <Text style={styles.textStyle}>{title}</Text>
      <Text style={styles.descriptionText}>{descriptionText}</Text>
    </View>
  );
}
const styles = StyleSheet.create({
  container:{
    width: '100%',
    paddingVertical: 10,
    paddingHorizontal: 10,
  },
  textStyle:{
    fontWeight: "400",
    fontSize: 24
  },
  descriptionText:{
    fontSize: 15,
    color: COLORS.grayDark
  }  
});
export default TitleText;