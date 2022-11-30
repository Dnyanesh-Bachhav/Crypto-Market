import { StyleSheet, Text, View } from "react-native";
import { Octicons } from '@expo/vector-icons';
import { COLORS } from "../components/constants";
import { FontAwesome } from '@expo/vector-icons';
import DrawerScreenHeader from "../components/HomeScreen/DrawerScreenHeader";

function TransactionHistoryScreen() {
    return (
        <View style={styles.container}>
            <DrawerScreenHeader headerText="Transactions List" />
            {/* <Text style={{ fontSize: 18,marginLeft: 10,fontWeight: "500",marginBottom: 10 }} >Transactions List</Text> */}
            <BuyItem />
            <BuyItem />
            <BuyItem />
            <BuyItem />
            <BuyItem />
            <SellItem />
        </View>
    );
}
function BuyItem() {
    return (
        <View style={styles.row}>
            <View style={{ flexDirection: 'row' }}>
                <View style={{...styles.iconStyle,backgroundColor: COLORS.lightGreen }}>
                    <Octicons name="download" size={24} color={COLORS.success} />
                </View>
                <View style={{ marginLeft: 10 }} >
                    <Text style={{...styles.headerStyle,color: COLORS.success}}>Buy</Text>
                    <Text style={{color: COLORS.grayDark, }} >29/11/2022 11:22AM</Text>
                </View>
            </View>
            <View style={styles.quantityStyle}>
                <Text style={{ marginRight: 5, fontSize: 16 }} >102.7 BTC</Text>
                <FontAwesome name="angle-right" size={20} color={COLORS.gray}/>
            </View>
        </View>
    );
}
function SellItem() {
    return (
        <View style={styles.row}>
            
            <View style={{ flexDirection: 'row' }}>
                <View style={{...styles.iconStyle,backgroundColor: COLORS.lightRed }}>
                    <Octicons name="upload" size={24} color={COLORS.red} />
                </View>
                <View style={{ marginLeft: 10 }} >
                    <Text style={{...styles.headerStyle,color:COLORS.red }}>Sell</Text>
                    <Text style={{color: COLORS.grayDark, }} >29/11/2022 11:22AM</Text>
                </View>
            </View>
            <View style={styles.quantityStyle}>
                <Text style={{ marginRight: 5, fontSize: 16 }} >102.7 BTC</Text>
                <FontAwesome name="angle-right" size={20} color={COLORS.gray}/>
            </View>
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        // borderWidth: 1,
        paddingVertical: 10,
        marginHorizontal: 10,
        borderBottomWidth: 1,
        borderBottomColor: COLORS.gray,
    },
    iconStyle: {
        
        width: 45,
        height: 45,
        borderRadius: 100,
        justifyContent: 'center',
        alignItems: 'center'
    },
    headerStyle: {
        fontSize: 16,
        fontWeight: '500',
    },
    quantityStyle: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    }
})
export default TransactionHistoryScreen;