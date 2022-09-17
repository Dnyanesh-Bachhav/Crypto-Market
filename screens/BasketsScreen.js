import react,{useState,useEffect} from "react";
import {View,Text,StyleSheet,ScrollView} from 'react-native';
import Basket from "../components/BasketsScreen/BasketItem";
import NetInfo from '@react-native-community/netinfo';
import NoInternetScreen from "./NoInternetScreen";
import { MostGainedCoins2 } from "../components/constants";
import Profit from '../assets/Profit.jpg';
import Volume from '../assets/trending.jpg';
import trust from '../assets/trust.png';
import meme from '../assets/meme_doge.png';
import loss1 from '../assets/loss1.png';
import { getData, getTopCoinsCoinMarketCap } from "../Services/requestsCoinMarketCap";
function BasketsScreen(){
    const [connected,setConnected] = useState(true);
    const checkConnection = async ()=>{
        const data = await NetInfo.fetch();

        setConnected(data.isConnected);
    }
    async function getData1(){
        const topCoinsArray = await getTopCoinsCoinMarketCap();
        for( let i=0;i<10;i++)
        {
            console.log(topCoinsArray.data[i].name);
        }
    }
    useEffect(()=>{
        console.log("Basket Screen...")
        checkConnection();
        getData1();
    },[]);
    return(
        <>
        {
            connected ?
            <View style={styles.container}>
                <ScrollView style={{width: '100%'}}
                contentContainerStyle={{alignItems: 'center',paddingBottom: 20}}
                showsVerticalScrollIndicator={false} >
                    <Basket name="High Volume" description="Highly traded coins in last 24h" data={MostGainedCoins2} imgSrc={Volume} />
                    <Basket name="High Profit coins" description="Highly profitable coins in last 24h" data={MostGainedCoins2} imgSrc={Profit} />
                    <Basket name="High Loss coins" description="Coins which are corrected more in last 24h" data={MostGainedCoins2} imgSrc={loss1} />
                    <Basket name="Trusted Coins" description="Trustworthy coins" data={MostGainedCoins2} imgSrc={trust} />
                    <Basket name="Meme Coins" description="Meme coins highly volatile" data={MostGainedCoins2} imgSrc={meme}/>
                </ScrollView>
            </View>
            : <NoInternetScreen/>
            }
        </>
    );
}
const styles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent:'center',
        alignItems: 'center',     // To center item on x-axis
        
    }
})
export default BasketsScreen;