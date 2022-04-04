import react,{useEffect,useState} from "react";
import {View,Text,StyleSheet,FlatList,ActivityIndicator,RefreshControl} from 'react-native';
import CoinItem from "../components/marketScreen/CoinItem";
import SearchBar from "../components/marketScreen/SearchBar";
import TableHeader from "../components/marketScreen/TableHeader";
import { getCoins } from "../Services/requests";
function MarketScreen(){
    const [coinsData,setCoinsData] = useState(null);
    const [loading,setLoading] = useState(true);
    const fetchData = async(pageNumber)=>{
        const data = await getCoins(pageNumber);
        setCoinsData(data);
        setLoading(false);
    }
    useEffect(()=>{
        fetchData();
    },[]);
    return(
        <View style={styles.container}>
            <SearchBar/>
            <TableHeader/>
            {
                !loading && coinsData ? (
                <FlatList
                data={coinsData}
                showsVerticalScrollIndicator={false}
                renderItem={({item})=>(
                    <CoinItem coinName={item.name} symbol={item.symbol} current_price={item.current_price} uri={item.image} price_change_percentage_24h={item.price_change_percentage_24h} />
                )}
                onEndReached={()=>fetchData((coinsData.length/50)+1)}
                refreshControl={<RefreshControl refreshing={loading} />}
                />)
                : <ActivityIndicator/>
            }
            
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        paddingHorizontal: 10
    }
});
export default MarketScreen;