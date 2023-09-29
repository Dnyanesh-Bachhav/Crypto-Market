import react from "react";
import {View,Text,StyleSheet,TouchableOpacity,Image} from 'react-native';
import { COLORS } from "../constants";
import { AntDesign } from '@expo/vector-icons';
import {useNavigation} from '@react-navigation/native';
function Header({coinName,imgUrl }){
    const navigation = useNavigation();
    return(
        <View style={styles.container}>
            <TouchableOpacity onPress={()=>{
                navigation.goBack();
            }} >
            <AntDesign name="arrowleft" size={24} color={COLORS.white} style={styles.iconStyle}/>
            </TouchableOpacity>
            <View style={styles.coinContainer}>
                <Image
                    source={{
                        uri: imgUrl
                    }}
                    style={styles.imageStyle}
                />
                <Text style={styles.textStyle}>{coinName}</Text>
            </View>
        </View>
    );
}
const styles = StyleSheet.create({
    container:{
        flexDirection: 'row',
        width: '100%',
        backgroundColor: COLORS.primary,
        padding: 5,
    },
    iconStyle:{
    },
    textStyle:{
        color: COLORS.white,
        fontWeight: 'bold',
        padding: 5,
    },
    coinContainer:{
        width: '90%',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',

    },
    imageStyle:{
        width: 25,
        height: 25
    }
});
export default Header;