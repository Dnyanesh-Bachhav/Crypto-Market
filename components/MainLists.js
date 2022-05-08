import React,{useState,useEffect} from "react";
import {View,Text,StyleSheet,ActivityIndicator } from 'react-native';
import { MostGainedCoins } from "./constants";
import ListCoins from "./Listcoins";
import TitleText from "./TitleText";
import {getMarketHighChangedData, getTopCoins } from '../Services/requests';
function MainLists(){
    const [arrayData,setArrayData] = useState([]);
    const [topCoins,setTopCoins] = useState([]);
    const [loading,setLoading] = useState(false);
    async function getData(){
        setLoading(true);
        const data = await getMarketHighChangedData();
        setArrayData(data);
        setLoading(false);
    }
    async function getTopMarketCoins(){
        setLoading(true);
        const data = await getTopCoins();
        setTopCoins(data);
        setLoading(false);
    }
    useEffect(()=>{
        getData();
        getTopMarketCoins();
    },[]);
    return(
        <View style={styles.container}>
            {/* Newly Launched */}
            <TitleText title="Newly Launched..." descriptionText="Explore more assets for your portfolio"/>
            <ListCoins coinData={MostGainedCoins} />
            {/* Most Gained Coins */}
            <TitleText title="Top Gainers..." descriptionText="Coins that have gain the most in 24 hours"/>
            <ListCoins coinData={arrayData} />
            {/* Most Lossed Coins */}
            <TitleText title="Popular coins..." descriptionText="People usually buy these coins..."/>
            <ListCoins coinData={topCoins} />
            {/* <TitleText title="Crypto News" descriptionText="News in the market..."/> */}

        </View>
    );
}
const styles = StyleSheet.create({
    container:{
    }
});

export default MainLists;