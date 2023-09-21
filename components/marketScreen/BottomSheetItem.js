import react from "react";
import {View,Text,StyleSheet,Image,TouchableOpacity} from 'react-native';
import { COLORS } from "../constants";
import Button1 from "./Button1";
import { AntDesign } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { useWatchlist } from "../../Contexts/WatchListContext";
function SheetComponent({coinName, coinId, symbol,current_price,uri,price_change_percentage_24h}){
    const { watchlistCoinIds, removeWatchlistCoinId, storeWatchlistCoinId } = useWatchlist();
    const checkIfCoinIsWatchListed = ()=>{
        return watchlistCoinIds.some((coinIdValue)=> coinIdValue===coinId);
    }
    const handleWatchListCoin = ()=>{
        if(checkIfCoinIsWatchListed(coinId))
        {
            return removeWatchlistCoinId(coinId);
        }
        return storeWatchlistCoinId(coinId);
    }
    let textColor = price_change_percentage_24h > 0 ? COLORS.success : COLORS.red;
    return(
        <View style={styles.container}>
            <View style={{ flexDirection: 'row',alignItems: 'center',paddingHorizontal: 10,borderBottomWidth: 1,borderColor: COLORS.gray,paddingBottom: 5 }} >
                <Image
                    source={{
                        uri: uri || "https://assets.coingecko.com/coins/images/1/small/bitcoin.png"
                    }}
                    style={{
                        width: 50,
                        height: 50
                    }}
                />
                <Text style={{marginLeft: 10, ...styles.textStyle}}>{coinName}</Text>
                <View style={{flex: 1,flexDirection: 'column',justifyContent: 'center', alignItems: 'flex-end',}} >
                        <TouchableOpacity>
                    <View style={{justifyContent: 'center',alignItems: 'center'}} >
                        {/* <Ionicons name="eye-outline" size={24} color="black" /> */}
                        <FontAwesome name={ checkIfCoinIsWatchListed() ? "star" : "star-o" }  size={24} color={ checkIfCoinIsWatchListed() ? "#FFBF00" : "black" }  onPress={()=>{
                            handleWatchListCoin();
                        }} />
                        {/* <Text style={{fontSize: 10}} >Watchlist</Text> */}
                    </View>
                        </TouchableOpacity>
                </View>
            </View>
            <View style={{flexDirection: 'row',marginTop: 25,alignItems: 'center',paddingLeft: 15}} >
                <Text style={{color: COLORS.success,marginRight: 20, ...styles.textStyle}}>₹{current_price }</Text>
                <AntDesign name={price_change_percentage_24h > 0 ? "caretup" : "caretdown"} size={16} color={price_change_percentage_24h > 0 ? COLORS.success : COLORS.red } />
                <Text style={{color: textColor, ...styles.textStyle}}  >{price_change_percentage_24h}%</Text>
            </View>
            <View style={styles.btnGroup}>
                <Button1 style={styles.btnStyle} button_text="Buy" backColor={COLORS.success} name={coinName} price={current_price} symbol={symbol} imgSrc={uri} screenName="BuyCoinScreen" />
                <Button1 button_text="Sell" backColor={COLORS.red} name={coinName} price={current_price} symbol={symbol} imgSrc={uri} screenName="SellCoinScreen" />
            </View>
        </View>
    );
}
const styles = StyleSheet.create({
    container:{
        width: '100%',
        height: '100%',
        padding: 10
    },
    btnGroup:{
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        padding: 10,
        marginTop: 25
    },
    textStyle:{
        fontWeight: 'bold',
    },
    btnStyle:{
        width: '50%',
        color: 'black',
        borderWidth: 1,
        borderColor: 'black'
    }

})
export default SheetComponent;