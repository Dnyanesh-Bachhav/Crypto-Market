import { FlatList, StyleSheet, Text, View } from "react-native";
import { COLORS } from "../constants";
import ListComponent from "./ListComponent";

function HistoricalDataGFI({gfiHistoricalData}){
    let count = 0;
    return(
        <View style={styles.container}>
            
            <FlatList
            data={gfiHistoricalData}
            renderItem={({item})=>(
                <ListComponent name={item.name} value={item.value} valueText={item.valueText} />
            )}
            keyExtractor={()=>count++}
            />
        </View>
    );
}
const styles = StyleSheet.create({
    container:{
        marginTop: 15,
        marginHorizontal: 5,
        paddingVertical: 10,
        width: '90%',
        alignSelf: 'center',
        padding: 10,
        borderRadius: 10,
        backgroundColor: COLORS.white,
        elevation: 5,
    },

});
export default HistoricalDataGFI;