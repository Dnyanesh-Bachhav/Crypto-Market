import react,{useState,useEffect} from "react";
import {View,Text,StyleSheet,FlatList} from 'react-native';
import BasketMenuItem from "../components/BasketItemsScreen/BasketMenuItem";
import Header from "../components/BasketItemsScreen/Header";
import { MostGainedCoins2,profitCoins,lossCoins,trustedCoins,memeCoins } from '../components/constants';
function BasketItems({route}){
    const screenName = route.params.screenName;
    const [arrayData,setArrayData ] = useState([]);
    useEffect(()=>{

        if( screenName === "High Volume")
        {
            setArrayData(MostGainedCoins2);
        }
        if( screenName === "High Profit coins")
        {
            setArrayData(profitCoins);
        }
        if( screenName === "High Loss coins")
        {
            setArrayData(lossCoins);
        }
        if( screenName === "Trusted Coins")
        {
            setArrayData(trustedCoins);
        }
        if( screenName === "Meme Coins")
        {
            setArrayData(memeCoins);
        }
    });
    return(
        <View style={styles.container}>
            <Header name={ route.params.screenName } imgSrc={route.params.imgSrc} />
            <FlatList
                data={arrayData}
                renderItem={({item})=>(
                    <BasketMenuItem name={item.name} percentage={item.percentage} imgSrc={item.imgSrc ||"https://assets.coingecko.com/coins/images/1372/large/WAX_Coin_Tickers_P_512px.png" } price={item.price} />
                )}
                style={ styles.listStyle }
                keyExtractor={(item,index)=>index}
            />
            
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        flex: 1
    },
    listStyle:{
        padding: 10
    }
})
export default BasketItems;