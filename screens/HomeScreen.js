import React from "react";
import {View,Text,StyleSheet,ScrollView} from 'react-native';
import Banner from "../components/Banner";
import Header from '../components/Header';
import MainLists from "../components/MainLists";
function HomeScreen(){
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