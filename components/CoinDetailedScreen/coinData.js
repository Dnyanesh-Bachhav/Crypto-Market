import react,{useState,useEffect} from 'react';
import {View,Text,StyleSheet,ActivityIndicator,ScrollView} from 'react-native';
import { getCoinDataById } from '../../Services/requests';
import Button from './Button';
import { COLORS } from '../constants';
function CoinData({coinId,coinName }){
    const[loading,setLoading] = useState(true);
    const[coinData,setCoinData] = useState(null);
    const getCoinData = async ()=>{
        setLoading(true);
        console.log("CoinID in coindata: "+coinId);
        const data = await getCoinDataById(coinId);
        // console.log(data);
        setCoinData(data);
        // console.log("CoinID setCoinData: "+coinData);
        setLoading(false);
    }
    useEffect(()=>{
        getCoinData();
    },[]);
    return(
        <View style={styles.container}>
            
            { !loading 
            ? 
            <View style={styles.coinDataContainer}>
                <Text style={styles.textStyle}>{coinName}</Text>
                <Text style={styles.descriptionText}>
                    { !coinData ?
                        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam iusto doloremque dolores quis dolorum soluta id molestiae facere cumque ullam repellat ex, maiores perspiciatis? Reiciendis magnam quas possimus nemo at. Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui obcaecati cum explicabo est, suscipit architecto nam earum. Recusandae expedita iure consectetur sed nihil possimus, nisi optio alias sunt vel ducimus!"
                        : coinData.description.en
                    }
                </Text>
                {/* <Text style={styles.descriptionText}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore itaque suscipit a, repellendus laboriosam quaerat magni, sequi nesciunt esse odit officia consectetur omnis doloremque expedita! Maxime sapiente doloremque ab eius? Lorem, ipsum dolor sit amet consectetur adipisicing elit. Explicabo harum sed enim nihil, quo eius veniam distinctio, dolores sapiente quam laborum quibusdam saepe facere. Sed incidunt nisi nemo voluptatum quod?</Text>
                <Text style={styles.descriptionText}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore itaque suscipit a, repellendus laboriosam quaerat magni, sequi nesciunt esse odit officia consectetur omnis doloremque expedita! Maxime sapiente doloremque ab eius? Lorem, ipsum dolor sit amet consectetur adipisicing elit. Explicabo harum sed enim nihil, quo eius veniam distinctio, dolores sapiente quam laborum quibusdam saepe facere. Sed incidunt nisi nemo voluptatum quod?</Text> */}
                <View style={styles.btnGroup}>
                    <Button button_text="Buy" backColor={COLORS.success} />
                    <Button button_text="Sell" backColor={COLORS.red} />
                </View>
                <View style={styles.contractAddress}>
                    
                </View>
            </View>
            : 
            <ActivityIndicator size="large" color={COLORS.black} />
        }
        </View>
    );
}
const styles = StyleSheet.create({
    container:{
        paddingHorizontal: 15,
    },
    textStyle:{
        fontSize: 24,
        fontWeight: 'bold'
    },
    coinDataContainer:{
        marginBottom: 55
    },
    btnGroup:{
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        padding: 10
    },
    descriptionText:{
        fontSize: 14,
    },
    contractAddress:{
        fontSize: 24,
    }
});
export default CoinData;