import react,{useState,useRef,useContext} from "react";
import {View,Text,StyleSheet,TextInput,TouchableOpacity,ToastAndroid} from 'react-native';
import { COLORS } from "../components/constants";
import Button from "../components/marketScreen/Button";
import Header from "../components/marketScreen/Header";
import { portfolioContext } from "../Contexts/PortfolioContext";
import { transactionContext } from "../Contexts/TransactionContext";
function BuyCoinScreen({route}){
    const[itemQuantity,setItemQuantity] = useState();
    const[date,setDate] = useState(null);
    const {portfolioCoins,storePortfolioCoin,updatePortfolioCoins } = useContext(portfolioContext);
    const { transactions, storeTransaction } = useContext(transactionContext);
    const itemExists = portfolioCoins.some(coin=> coin.name === route.params.name);

    console.log( transactions );
    function addZero(item){
        if(item<10)
        {
            return "0"+item;
        }
        return item;
    }

    function configureDate(){
        const d = new Date();
        let time = "";
        let day = d.getDate();
        let month = d.getMonth() + 1;
        let year = d.getFullYear();
        let hours = addZero(d.getHours());
        let minutes = addZero(d.getMinutes());
        if(hours<12)
        {
            time = "AM";
        }
        else{
            if( hours>=12 && minutes>0)
            {
                time = "PM";
            }
        }
        return day + "/" + month + "/" + year + " " + hours + ":" + minutes + " " + time;
    }

    return(
        <View style={styles.container}>
            <Header coinName={route.params.name} imgSrc={route.params.imgSrc} />
            <View style={styles.dataContainer}>
                <View style={{flexDirection: 'row',justifyContent: 'space-around',width: '100%',padding: 10,marginVertical: 20}} >
                    <Text style={{ color: COLORS.red, ...styles.textStyle}}>{route.params.name}</Text>
                    <Text style={{ color: COLORS.success,fontWeight: 'bold', ...styles.textStyle}}>₹{route.params.price}</Text>
                </View>
            <Text style={{fontSize: 24, ...styles.textStyle}}>Quantity</Text>
            <TextInput style={styles.textInput} placeholder="Enter a quantity"
             keyboardType="number-pad"
             onChangeText={(data)=>{
                if(data>0) 
                setItemQuantity(data)
            }

             }
             />
            {/* <Text style={{fontSize: 14,color: COLORS.grayDark, ...styles.textStyle}}>Minimum buy 1</Text> */}
            <Text style={{fontSize: 16,marginTop: 10, ...styles.textStyle}}>{route.params.symbol.toUpperCase()}</Text>
            <TouchableOpacity style={styles.btn} activeOpacity={0.5} onPress={
                ()=>{
                    if(itemExists)
                    {
                        portfolioCoins.map((coin)=>{
                            if(coin.name === route.params.name)
                            {
                                // console.log("coin found: "+coin.name+"item name: "+route.params.name+" isTrue: "+(coin.name === route.params.name));
                                let val = parseFloat(coin.quantity)
                                val += parseFloat(itemQuantity);
                                coin.quantity = val;
                                console.log("Item quantity: "+coin.quantity);
                                console.log("Item quantity 1: "+typeof itemQuantity);
                            }
                        });
                        updatePortfolioCoins(portfolioCoins);
                        storeTransaction({
                            name: route.params.name,
                            type: "Buy",
                            date: configureDate(),
                            coin: route.params.symbol.toUpperCase(),
                            quantity: itemQuantity
                        });
                    }
                    else{
                        storePortfolioCoin(
                            { 
                                name: route.params.name,
                                price: route.params.price,
                                imgSrc: route.params.imgSrc,
                                quantity: itemQuantity
                            }
                        );
                        storeTransaction({
                            name: route.params.name,
                            type: "Buy",
                            date: configureDate(),
                            coin: route.params.symbol.toUpperCase(),
                            quantity: itemQuantity
                        });
                    }
                    ToastAndroid.show("Coin bought successfully...",1000);
                }
            } >
                <Button button_text={"Buy"} backColor={COLORS.success} />
            </TouchableOpacity>
            </View>
        </View>
    );
}
const styles = StyleSheet.create({
    container:{
        flex: 1,
    },
    dataContainer:{
        justifyContent: "center",
        alignItems: "center",
        marginTop: 50
    },
    textInput:{
        padding: 5,
        paddingHorizontal: 10,
        marginHorizontal: 10,
        paddingVertical: 10,
        marginTop: 10,
        fontSize: 21,
        borderWidth: 1,
        borderColor: COLORS.gray,
        borderRadius: 5
    },
    textStyle:{
        fontSize: 20
    },
    btn:{
        marginTop: 50,
    }
});
export default BuyCoinScreen;