import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { COLORS } from "../constants";
import { AntDesign } from '@expo/vector-icons';
import { useNavigation } from "@react-navigation/native";
import { MaterialIcons } from '@expo/vector-icons';
function Header({headerText}){
    const navigation = useNavigation();
    return(
        <View style={styles.container}>
            <TouchableOpacity onPress={()=>{
                navigation.goBack();
            }} >
            <AntDesign name="arrowleft" size={24} color={COLORS.white} />
            </TouchableOpacity>
            <Text style={{color: COLORS.white,fontSize: 21,marginLeft: 10}}>{headerText}12</Text>
            <TouchableOpacity onPress={()=>{
            }}>
            <View style={{ flexDirection: 'row', alignContent: 'flex-end', justifyContent: 'center',alignItems: 'center',backgroundColor: COLORS.purple,padding: 5, paddingHorizontal: 10, borderRadius: 10,marginRight: 10 }} >
              <Text style={{color: COLORS.white, }} >Clear</Text>
              <MaterialIcons name="delete-sweep" size={20} color="white" style={{marginLeft: 5}} />
            </View>
          </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        flexDirection: 'row',
        // justifyContent: 'center',
        alignItems: 'center',
        paddingVertical: 10,
        paddingLeft: 10,
        backgroundColor: COLORS.primary,
        borderWidth: 1,
    }
})
export default Header;