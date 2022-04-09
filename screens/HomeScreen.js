import React,{useEffect,useState} from "react";
import {View,Text,StyleSheet,ScrollView,TouchableOpacity} from 'react-native';
import Banner from "../components/Banner";
import Header from '../components/Header';
import MainLists from "../components/MainLists";
import {useNavigation} from '@react-navigation/native';
function HomeScreen(){
    const navigation = useNavigation();
    return(
        <View style={styles.container}>
            <Header/>
            <ScrollView showsVerticalScrollIndicator={false}>
                <Banner/>
                <MainLists/>
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        height: '100%',
        marginBottom: 10
    }
})
export default HomeScreen;