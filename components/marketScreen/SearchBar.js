import react,{useEffect,useState} from "react";
import {View,Text,StyleSheet,TextInput} from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { COLORS } from "../constants";
import SearchableDropDown from "react-native-searchable-dropdown";
import {getAllCoins} from '../../Services/requests';
function SearchBar({refRBSheet,setCurrentCoin}){
    const[loading,setLoading] = useState(false);
    const[coinsData,setCoinsData] = useState([]);
    const[selectedCoin,setSelectedCoin] = useState("");
    const fetchData = async function(){
        if(loading)
        {
            return;
        }
        setLoading(true);
        const data = await getAllCoins();
        setCoinsData(data);
        setLoading(false);

    }
    useEffect(()=>{
        fetchData();
    },[]);
    return(
        <View style={styles.container}>
            {/* <FontAwesome name="search" size={24} color={COLORS.grayDark}/>
            <TextInput placeholder="Search coins..." style={styles.textInput}/> */}
            <SearchableDropDown
                items={coinsData}
                onItemSelect={(item)=> {
                    console.log("Coin: "+item.id);
                    setCurrentCoin(item);
                    setSelectedCoin(item.id);
                    refRBSheet.current.open();
                }}
                containerStyle={{
                    width: '100%',
                    paddingVertical: 10,
                    paddingHorizontal: 10
                }}
                itemStyle={{
                    padding: 10,
                    marginTop: 2,
                    backgroundColor: COLORS.secondary,
                    borderWidth: 1,
                    borderColor: COLORS.gray,
                    borderRadius:5
                }}
                itemTextStyle={{
                    color: COLORS.black
                }}
                resetValue={false}
                placeholder={ selectedCoin || "Select a coin..."}
                placeholderTextColor={COLORS.black}
                textInputProps={{
                    underlineColorAndroid: 'transparent',
                    style:{
                        padding: 12,
                        borderWidth: 1.5,
                        borderColor: COLORS.grayDark,
                        borderRadius: 5,
                        backgroundColor: COLORS.white,
                        color: COLORS.black
                    }
                }}
            />
        </View>
    );
}
const styles = StyleSheet.create({
    container:{
        width: '100%',
        alignItems: 'center',
        marginTop: 10,
        flexDirection: 'row'
    },
    textInput:{
        marginLeft: 5,
        paddingVertical: 5,
        fontSize: 15
    }
});

export default SearchBar;