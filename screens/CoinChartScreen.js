import react from 'react';
import {View,Text,StyleSheet,TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import Header from '../components/CoinChartScreen/Header';
import { AntDesign } from '@expo/vector-icons';
function CoinChartScreen({route}){
   const navigation = useNavigation();
    return(
        <View style={styles.container}>
            <Header coinName={ route.params.coin} />
        </View>
    );
}
const styles = StyleSheet.create({
    container:{
        

    }
});
export default CoinChartScreen;