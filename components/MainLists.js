import React from "react";
import {View,Text,StyleSheet} from 'react-native';
import { MostGainedCoins } from "./constants";
import ListCoins from "./Listcoins";
import TitleText from "./TitleText";
function MainLists(){
    return(
        <View style={styles.container}>
            {/* Newly Launched */}
            <TitleText title="Newly Launched..." descriptionText="Explore more assets for your portfolio"/>
            <ListCoins coinData={MostGainedCoins} />
            {/* Most Gained Coins */}
            <TitleText title="Top Gainers..." descriptionText="Coins that have gain the most in 24 hours"/>
            <ListCoins coinData={MostGainedCoins} />
            {/* Most Lossed Coins */}
            <TitleText title="Top Losers..." descriptionText="Coins that have corrected more in last 24 hours"/>
            <ListCoins coinData={MostGainedCoins} />
        </View>
    );
}
const styles = StyleSheet.create({
    container:{
    }
});

export default MainLists;