import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, RefreshControl, StyleSheet } from 'react-native';
import { useWatchlist } from '../Contexts/WatchListContext';
import CoinItem from '../components/marketScreen/CoinItem';
import { getWatchlistedCoins } from '../Services/requests';

const WatchlistScreen = () => {
  const {watchlistCoinIds} = useWatchlist();

  console.log(watchlistCoinIds);
  const [coins, setCoins] = useState([]);
  const [loading, setLoading] = useState(false);

  const transformCoinIds = () => watchlistCoinIds.join('%2C');

  const fetchWatchlistedCoins = async () => {
    if (loading) {
      return;
    }
    setLoading(true);
    const watchlistedCoinsData = await getWatchlistedCoins(1, transformCoinIds());
    setCoins(watchlistedCoinsData);
    setLoading(false);
  };

  useEffect(() => {
    if (watchlistCoinIds.length > 0) {
      fetchWatchlistedCoins();
    }
  }, [watchlistCoinIds]);

  return (
    <View style={ styles.container }>
      <FlatList 
        data={coins}
        renderItem={({ item }) => 
        <CoinItem coinName={item.name} coinId={item.id} symbol={item.symbol} current_price={item.current_price} uri={item.image} price_change_percentage_24h={item.price_change_percentage_24h} />}
        refreshControl={
          <RefreshControl 
            refreshing={loading}
            tintColor="white"
            onRefresh={watchlistCoinIds.length > 0 ? fetchWatchlistedCoins : null}
            />
          }
          />
    </View>
  )
};

const styles = StyleSheet.create({
  container:{
      flex: 1,
      marginTop: 10,
      paddingHorizontal: 10
  },
});
export default WatchlistScreen;