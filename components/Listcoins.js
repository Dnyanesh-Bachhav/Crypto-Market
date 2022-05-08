import React,{useState} from 'react';
import {View,Text,StyleSheet,ScrollView,Dimensions,FlatList} from 'react-native';
import Card from './Card';
const SCROLLVIEW_HEIGHT = Dimensions.get('window').height / 4;
function ListCoins({coinData}){
  
  return(
    <View style={styles.coinListView}>
      <FlatList
      data={coinData}
      horizontal={true}
      contentContainerStyle={styles.flatListContainer}
      renderItem={({item,index})=>(
        <>
        
          <Card
              coinName={item.name}
              coinId={item.id}
              imgUrl={ item.image || item.imgSrc }
              percentage={item.market_cap_change_percentage_24h || item.market_cap_change_24h }
              price={item.current_price || item.price}
              key={index}
              style={{flexDirection:'column',height: 50,elevation: 25 }}
              />
              {/* <Text>{item.top_3_coins}</Text> */}
              </>
            )
      }
      keyExtractor={(item)=>item.id}
      />
    </View>
  );
}
const styles = StyleSheet.create({
  coinListView:{
    width: '100%',
    paddingTop: 5,
    flex: 1,
    flexDirection: 'row'
  },
});
export default ListCoins;