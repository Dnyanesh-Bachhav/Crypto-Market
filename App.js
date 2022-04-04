import react,{useEffect,useState} from 'react';
import { StyleSheet, Text, View, StatusBar } from 'react-native';
import { COLORS } from './components/constants';
import { NavigationContainer } from '@react-navigation/native';
import Tabs from './Navigation/tabs';
import NetInfo from '@react-native-community/netinfo';
import NoInternetScreen from './screens/NoInternetScreen';
export default function App() {
  const [connected,setConnected] = useState(true);
  async function getNetworkData(){
    const data = await NetInfo.fetch();
    setConnected(data.isConnected);
  }
  useEffect(()=>{
    getNetworkData();
  },[]);
  return (
    <View style={styles.container}>
    {
      connected ?
      <>
        <NavigationContainer>
            <Tabs/>
        </NavigationContainer>
      </>
    : <NoInternetScreen/>
    
    
  }
    <StatusBar style="auto" backgroundColor={COLORS.primary} styles={styles.statusBarStyle} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  statusBarStyle:{
    backgroundColor: COLORS.primary,
  }
});
