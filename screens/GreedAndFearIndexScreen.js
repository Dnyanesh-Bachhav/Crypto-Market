import { View, Text, StyleSheet, ActivityIndicator } from 'react-native';
import {COLORS} from '../components/constants';

import RNSpeedometer from 'react-native-speedometer'
import { useEffect, useState } from 'react';
import { getGreedAndFearIndex } from '../Services/requests';
import HistoricalDataGFI from '../components/GreedAndFearIndexScreen/HistoricalDataGFI';
import DrawerScreenHeader from '../components/HomeScreen/DrawerScreenHeader';


// 0-25 Extreme Fear
// 25-46 Fear
// 46-54 Neutral
// 54-75 Greed
// 75-100 Extreme Greed


function GreedAndFearIndexScreen() {
  const[gfi,setGfi] = useState(null);
  const[gfiData,setGfiData] = useState({});
  const[gfiHistoricalData,setGfiHistoricalData] = useState([]);
  const getGFI = async ()=>{
    let array = [];
    const data = await getGreedAndFearIndex();
    console.log("Data:"+data.fgi.now.value);
    setGfi(data.fgi.now.value);
    setGfiData(data.fgi);
    array.push({
        name:"Previous Close",
        value: data.fgi.previousClose.value,
        valueText: data.fgi.previousClose.valueText
    });
    array.push({
        name:"One Week Ago",
        value: data.fgi.oneWeekAgo.value,
        valueText: data.fgi.oneWeekAgo.valueText
    });
    array.push({
        name:"One Month Ago",
        value: data.fgi.oneMonthAgo.value,
        valueText: data.fgi.oneMonthAgo.valueText
    });
    array.push({
        name:"One Year Ago",
        value: data.fgi.oneYearAgo.value,
        valueText: data.fgi.oneYearAgo.valueText
      });
    console.log(array);
    setGfiHistoricalData(array);
  }
  useEffect(()=>{
    getGFI();
  },[]);
    return (
        <View style={styles.container}>
            <DrawerScreenHeader headerText={"Greed and Fear Index"} />
            
            {
              gfi ? <RNSpeedometer value={gfi} size={290}
              wrapperStyle={styles.speedometerStyle}
              easeDuration={200}
              
              labels= {[
                  {
                    name: 'Extreme Fear',
                    labelColor: COLORS.black,
                    activeBarColor: '#ff2900',
                  },
                  {
                    name: 'Fear',
                    labelColor: COLORS.black,
                    activeBarColor: '#ff5400',
                  },
                  {
                    name: 'Neutral',
                    labelColor: COLORS.black,
                    activeBarColor: '#f4ab44',
                  },
                  {
                    name: 'Greed',
                    labelColor: COLORS.black,
                    activeBarColor: '#14eb6e',
                  },
                  {
                    name: 'Extreme Greed',
                    labelColor: COLORS.black,
                    activeBarColor: '#00ff6b',
                  },
                ]}
              />
            :
            
            <ActivityIndicator size={"small"} color={COLORS.black} />
          
          }
          {/* <View style={styles.historicalDataContainer}> */}
            <Text style={styles.headerStyle}>Historical Data</Text>
            {
              gfiHistoricalData ? <HistoricalDataGFI gfiHistoricalData={gfiHistoricalData} /> : <ActivityIndicator size={"small"} color={COLORS.black} />
            }
          {/* </View> */}
         </View>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        // justifyContent: 'center',
        // alignItems: 'center'
        // paddingHorizontal: 10
    },
    speedometerStyle:{
        marginTop: 20,
        alignSelf: 'center',
        marginBottom: 50,
    },
    textStyle:{
        fontSize: 25,
        fontWeight: '700',
        
        color: COLORS.primary,
    },
    headerStyle:{
      marginTop: 15,
      textAlign: 'left',
      marginLeft: 20,
      fontSize: 25,
      fontWeight: 'bold',
      color: COLORS.primary
  },
  historicalDataContainer:{
    // backgroundColor: COLORS.white,
  }
});
export default GreedAndFearIndexScreen;