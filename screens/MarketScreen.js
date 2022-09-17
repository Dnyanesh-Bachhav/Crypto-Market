import react,{useEffect,useState,useContext,useRef} from "react";
import {View,Text,StyleSheet,FlatList,ActivityIndicator,RefreshControl,TouchableOpacity,Pressable } from 'react-native';
import CoinItem from "../components/marketScreen/CoinItem";
import SearchBar from "../components/marketScreen/SearchBar";
import TableHeader from "../components/marketScreen/TableHeader";
import { getCoins } from "../Services/requests";
import NoInternetScreen from "./NoInternetScreen";
import NetInfo from '@react-native-community/netinfo';
import { portfolioContext } from '../Contexts/PortfolioContext';
import BottomSheet from "../components/marketScreen/BottomSheet";
import {useNavigation} from '@react-navigation/native';
import RBSheet from 'react-native-raw-bottom-sheet';
import Button from "../components/marketScreen/Button";
import {COLORS} from '../components/constants';
import Button1 from "../components/marketScreen/Button1";
import SheetComponent from "../components/marketScreen/BottomSheetItem";
function MarketScreen(){
    const refRBSheet = useRef();
    const navigation = useNavigation();
    const[currentCoin,setCurrentCoin] = useState({});
    const {portfolioCoins,storePortfolioCoin,mergeCoin,updatePortfolioCoins } = useContext(portfolioContext);
    console.log("Portfolio Coins: "+portfolioCoins);
    const [coinsData,setCoinsData] = useState([]);
    const [loading,setLoading] = useState(false);
    const [connected,setConnected] = useState(true);
    const checkConnection = async ()=>{
        const data = await NetInfo.fetch();
        setConnected(data.isConnected);
    }
    
    let count = 0;
    const fetchData = async(pageNumber)=>{
        if(loading)
        {
            return;
        }
        setLoading(true);
        console.log("PageNumber: "+pageNumber);
        const data = await getCoins(pageNumber);
        setCoinsData((existingData)=> ([...existingData,...data]));
        setLoading(false);
    }
    const refetchData = async()=>{
        if(loading)
        {
            return;
        }
        setLoading(true);
        const data = await getCoins(1);
        setCoinsData(data);
        setLoading(false);
    }
    useEffect(()=>{
        checkConnection();
        fetchData();
    },[]);
    return(
        <>
        {
            connected ? (
            <View style={styles.container}>
                <SearchBar refRBSheet={refRBSheet} setCurrentCoin={setCurrentCoin} />
                <TableHeader/>
                {
                    !loading && coinsData ? (
                    <FlatList
                    data={coinsData}
                    showsVerticalScrollIndicator={false}
                    renderItem={({item})=>(
                        <TouchableOpacity onPress={()=>{
                                setCurrentCoin(item);
                                refRBSheet.current.open();
                                
                            }}>
                                <CoinItem coinName={item.name} symbol={item.symbol} current_price={item.current_price} uri={item.image} price_change_percentage_24h={item.price_change_percentage_24h} />
                        </TouchableOpacity>
                    )}
                    onEndReached={async()=>
                        {
                            console.log("End: ");
                            await fetchData((coinsData.length/50)+1);
                        }}
                    maxToRenderPerBatch={16}
                    refreshControl={<RefreshControl refreshing={loading} onRefresh={refetchData} />}
                    keyExtractor={()=>count++}
                    />)
                    : <ActivityIndicator/>
                }
                {/* <BottomSheet refRBSheet={refRBSheet} coinName={"Tron"} price={"12"} coin={currentCoin} /> */}
                <RBSheet
                ref={refRBSheet}
                animationType="none"
                closeOnDragDown={true}
                closeOnPressMask={true}
                customStyles={{
                    container:{
                        backgroundColor: COLORS.white,
                    },
                wrapper: {
                    backgroundColor: "transparent",
                },
                draggableIcon: {
                    backgroundColor: "#000"
                }                
                }}
            >
                <SheetComponent coinName={currentCoin.name} symbol={currentCoin.symbol} current_price={currentCoin.current_price||1000} uri={currentCoin.image||"https://assets.coingecko.com/coins/images/1/small/bitcoin.png"} price_change_percentage_24h={currentCoin.price_change_percentage_24h||"1.2"} />
      </RBSheet>
            </View>)
            : <NoInternetScreen/>
        }
        </>
    );
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        paddingHorizontal: 10
    },
});
export default MarketScreen;