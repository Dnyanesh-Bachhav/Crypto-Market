import react from "react";
import {View,Text,StyleSheet,Image,TouchableOpacity } from 'react-native';
import { COLORS } from "../constants";
import Button from './Button';
import {useNavigation} from '@react-navigation/native';
function Basket({name,description,imgSrc}){
    const navigation = useNavigation();
    return (
      <View style={styles.container}>
        
          <View style={styles.basket}>
            <Image
              source={imgSrc}
              style={styles.imgStyle}
            />
            <View>
              <Text style={styles.basketName}>{name}</Text>
              <Text>{description}</Text>
            </View>
          </View>
          <Text style={styles.description}>
             Hello there it is just a basket of High Traded Volume Crypto...
          </Text>
          <View style={styles.btnContainer}>
          
            <Button button_text={"Check out"} navigation={navigation} screenName={name} imgSrc={imgSrc} />
          </View>
      </View>
    );
}
const styles = StyleSheet.create({
    container:{
        width: '95%',
        padding: 10,
        borderRadius: 10,
        borderColor: COLORS.grayDark,
        backgroundColor: COLORS.white,
        marginTop:15,
        elevation: 5
    },
    basket:{
        flexDirection: 'row',
        borderBottomColor: COLORS.gray,
        borderBottomWidth: 1,
        paddingBottom: 2
    },
    basketName:{
        fontSize: 20,
        fontWeight: 'bold',
        color: COLORS.primary,
        textAlign: 'left'
    },
    imgStyle:{
        width: 50,
        height: 50
    },
    description:{
        color: COLORS.grayDark,
        marginTop: 5,
        paddingHorizontal: 5
    },
    btnContainer:{
        alignItems: 'flex-end',
        marginTop: 12,
        paddingRight: 5,
    }
});
export default Basket;