import React,{useEffect,useState} from "react";
import {View,Text,StyleSheet,ScrollView,TouchableOpacity} from 'react-native';
import Banner from "../components/Banner";
import Header from '../components/Header';
import MainLists from "../components/MainLists";
import {useNavigation} from '@react-navigation/native';
import NetInfo from '@react-native-community/netinfo';
import NoInternetScreen from "./NoInternetScreen";
import Carousel from 'react-native-snap-carousel';
function HomeScreen(){
    const [connected,setConnected] = useState(true);
    const checkConnection = async ()=>{
        const data = await NetInfo.fetch();

        setConnected(data.isConnected);
    }

    useEffect(()=>{
        checkConnection();
    },[]);

    return(
        <>
            { 
                connected ? 
                    <View style={styles.container}>
                        <Header/>
                        <ScrollView showsVerticalScrollIndicator={false}>
                            <Banner/>
                            <MainLists/>
                        </ScrollView>
                    </View>
                : <NoInternetScreen/>
            }
        </>
    );
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        height: '100%',
        marginBottom: 10,
    }
})
export default HomeScreen;