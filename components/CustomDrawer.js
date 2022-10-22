import { DrawerContentScrollView, DrawerItem, DrawerItemList } from "@react-navigation/drawer";
import { Image, ImageBackground, ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { COLORS } from "./constants";
import { Entypo } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import user from "../assets/user.png";

function CustomDrawer(props) {
    return (
        <View style={styles.container}>
            <DrawerContentScrollView {...props} contentContainerStyle={{ backgroundColor: COLORS.secondary }}>
                <View style={styles.userInfo}>
                    <View style={{backgroundColor: COLORS.white,width: 100,height: 100,alignItems: 'center',justifyContent: 'center', borderRadius:50}} >
                    <Image source={user} style={{width: 80,height: 80,borderRadius: 40 }} />
                    </View>
                    <Text style={{marginLeft: 10,fontSize: 20}} >Dnyanesh Bachhav</Text>
                    <View style={{flexDirection: 'row',paddingTop: 5 }}>
                    <Text style={{marginLeft: 10,fontSize: 20}} >100 coins</Text>
                    <FontAwesome5 name="coins" size={24} color={COLORS.primary} style={{marginLeft: 5}} />
                    </View>
                </View>
                <View style={styles.listContainer}>
                    <DrawerItemList {...props} />
                </View>
            </DrawerContentScrollView>
            <View style={styles.bottomContainer}>
                <TouchableOpacity>
                    <View style={styles.bottomListItem}>
                        <Entypo name="share" size={24} color="black" />
                        <Text style={{marginLeft: 5}} >Tell a friend</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity>
                    <View style={styles.bottomListItem}>
                    <MaterialIcons name="logout" size={24} color="black" />
                        <Text style={{marginLeft: 5}} >Sign Out</Text>
                    </View>
                </TouchableOpacity>
            </View>
        </View>

    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    userInfo:{
        padding: 10,        
    },
    listContainer: {
        backgroundColor: COLORS.white,
    },
    bottomContainer: {
        borderTopWidth: 1,
        borderTopColor: COLORS.gray,
        padding: 16
    },
    bottomListItem: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 15
    }
})
export default CustomDrawer;