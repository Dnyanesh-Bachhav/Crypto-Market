import React from 'react';
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

        <Card
              coinName={item.coinName}
              percentage={item.percentage}
              key={index}
              style={{flexDirection:'column',height: 50}}
            />
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