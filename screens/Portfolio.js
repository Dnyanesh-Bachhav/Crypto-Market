import react from "react";
import {View,Text,StyleSheet,ScrollView} from 'react-native';
import InvestCoinCard from "../components/PortfolioScreen/InvestCoinCard";
import InvestmentInfo from "../components/PortfolioScreen/InvestmentInfo";
import { AntDesign } from '@expo/vector-icons';
import InfoModal from "../components/PortfolioScreen/InfoModal";
import { COLORS } from "../components/constants";
function PortfolioScreen(){
    return(
        <View style={styles.container}>
            <ScrollView showsVerticalScrollIndicator={false} 
                contentContainerStyle={{paddingBottom: 10}}
            >
                <InvestmentInfo/>
                <InfoModal/>
                <InvestCoinCard/>
                <InvestCoinCard/>
                <InvestCoinCard/>
                <InvestCoinCard/>
                <InvestCoinCard/>
            </ScrollView>
        </View>
    );
}
const styles = StyleSheet.create({
    container:{
        flex: 1,
        padding: 16,
        backgroundColor: COLORS.secondary,
    }
})
export default PortfolioScreen;