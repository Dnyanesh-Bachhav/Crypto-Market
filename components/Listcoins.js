import React,{useState} from 'react';
import {View,Text,StyleSheet,ScrollView,Dimensions,FlatList} from 'react-native';
import Card from './Card';
const SCROLLVIEW_HEIGHT = Dimensions.get('window').height / 4;
function ListCoins({coinData,type}){
  function getImageUrl(item){
     let imgUrl = "";
    //  console.log(item);
      // Coin Image fetching according to type of coin...
      if(type=="MostGained")
      {
        imgUrl = item.top_3_coins[0];
      }
      else{
        imgUrl = item.image || item.imgSrc;
      }
      // console.log("ImageUrl: "+imgUrl);

      return imgUrl;
    
  }

  function getPrice(item){
    let price = 0;
     // Coin Image fetching according to type of coin...
     if(type=="MostGained")
     {
       price = 500;
     }
     else{
       price = (item.current_price || item.price);
     }
     return price;
   
 }
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
              imgUrl={ `${getImageUrl(item)}` }
              percentage={item.market_cap_change_percentage_24h || item.market_cap_change_24h }
              price={ `${getPrice(item)}` }
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
    flexDirection: 'row',

  },
  flatListContainer:{
    
  }
});
export default ListCoins;