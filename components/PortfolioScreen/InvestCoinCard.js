import react,{useContext} from 'react';
import {View,Text,StyleSheet,Image,TouchableOpacity} from 'react-native';
import { COLORS } from '../constants';
import { Feather } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { portfolioContext } from '../../Contexts/PortfolioContext';


function InvestCoinCard({coinId,price,imgSrc,quantity,setInvested,setCurrent}){
    const {portfolioCoins,updatePortfolioCoins } = useContext(portfolioContext);
    function removeCoin(){
     const data = portfolioCoins.filter(coin=> coin.name !== coinId);
     updatePortfolioCoins(data);
     
     if(portfolioCoins.length==1)
     {
        console.log("Portfolio coins length==0");
        setInvested(0);
        setCurrent(0);
     }
    }
    return(
        <View style={styles.container}>

            <View style={styles.title}>
                <Image
                    source={{
                        uri: imgSrc
                    }}
                    style={styles.imgStyle}
                    />
                <Text style={styles.coinName}>{coinId}</Text>
                <TouchableOpacity style={styles.iconStyle} onPress={()=>{
                    console.log("Hi there..."+coinId);
                    removeCoin();
                }} >

                <AntDesign name="delete" size={22} color="black" />
                </TouchableOpacity>
                {/* <Feather name="arrow-right" size={24} color={COLORS.grayDark} style={styles.iconStyle}/> */}
            </View>
            <View style={styles.bottomSection}>
                <Text style={{color: COLORS.success,fontWeight: 'bold'}}>{quantity}</Text>
                <Text style={{color: COLORS.success,fontWeight: 'bold'}} >₹{price}</Text>
            </View>
        </View>
    );
}
const styles = StyleSheet.create({
    container:{
        width: '100%',
        borderWidth: 1,
        borderColor: COLORS.gray,
        marginTop: 16,
        borderRadius: 10,
    },
    imgStyle:{
        width: 45,
        height: 45
    },
    coinName:{
        color: COLORS.black,
        fontSize: 21,
        marginLeft: 8,
        fontWeight: '400'
    },
    title:{
        flexDirection: 'row',
        alignItems: 'center',
        padding: 10,
        borderBottomWidth: 1,
        borderBottomColor: COLORS.gray
    },
    iconStyle:{
        marginLeft: 'auto',
        padding: 5
    },
    bottomSection:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 10
    }
});
export default InvestCoinCard;