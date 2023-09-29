import react,{ useState,useEffect } from 'react';
import {View,Text,StyleSheet,TouchableOpacity,Dimensions,ScrollView } from 'react-native';
import {useNavigation} from '@react-navigation/native';
import Header from '../components/CoinDetailedScreen/Header';
import { AntDesign } from '@expo/vector-icons';
import { getCoinHistory,getCoinDataById } from '../Services/requests';
import { COLORS } from '../components/constants';
import CoinData from '../components/CoinDetailedScreen/coinData';
import {
  LineChart,
  BarChart,
  PieChart,
  ProgressChart,
  ContributionGraph,
  StackedBarChart
} from "react-native-chart-kit";
const {width: SIZE} = Dimensions.get('window');

function CoinDetailedScreen ({route}){
   async function fetchdata(){
        getCoinDataById(route.params.coinId).then(data=>{
            // console.log("CoinName: "+route.params.coinId);
            // console.log("In a chartScreen"+data);
        })
    }
    useEffect(()=>{
        fetchdata();
    },[]);
   const navigation = useNavigation();
    return(
        <View style={styles.container}>
            <Header coinName={route.params.coin} imgUrl={route.params.imgUrl} />
            <ScrollView showsVerticalScrollIndicator={false}>
        <View style={{alignSelf: 'center'}} >
            <LineChart
                data={{
                datasets: [
                    {
                    data: [
                        Math.random() * 100,
                        Math.random() * 100,
                        Math.random() * 100,
                        Math.random() * 100,
                        Math.random() * 100,
                        Math.random() * 100
                    ]
                    }
                ]
                }}
                width={Dimensions.get("window").width/10*9.5} // from react-native
                height={220}
                yAxisLabel="$"
                yAxisSuffix="k"
                yAxisInterval={1} // optional, defaults to 1
                chartConfig={{
                backgroundColor: COLORS.primary,
                decimalPlaces: 2, // optional, defaults to 2dp
                color: (opacity = 1) => `rgba(255, 255, 12, ${opacity})`,
                labelColor: (opacity = 1) => `rgba(255, 255, 12, ${opacity})`,
                style: {
                    borderRadius: 16,
                    backgroundColor: COLORS.primary,
                },
                propsForDots: {
                    r: "6",
                    strokeWidth: "2",
                    stroke: "#ffa726"
                }
                }}
                bezier
                style={{
                marginVertical: 8,
                borderRadius: 16
            }}
            />
        </View>
        <CoinData coinId={ route.params.coinId} coinName={route.params.coin} />
        </ScrollView>
        </View>
    );
}
const styles = StyleSheet.create({
    container:{
        

    }
});
export default CoinDetailedScreen;