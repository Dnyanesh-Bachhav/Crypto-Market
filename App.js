import HomeScreen from './screens/HomeScreen';
import react,{useEffect,useState} from 'react';
import { StyleSheet, Text, View, StatusBar, SafeAreaView } from 'react-native';
import { COLORS } from './components/constants';
import { NavigationContainer } from '@react-navigation/native';
import Tabs from './Navigation/tabs';
import NetInfo from '@react-native-community/netinfo';
import NoInternetScreen from './screens/NoInternetScreen';
import PortfolioContextProvider from './Contexts/PortfolioContext';
import TransactionContextProvider from './Contexts/TransactionContext';
import 'react-native-gesture-handler';
import { createDrawerNavigator } from '@react-navigation/drawer';
import 'react-native-get-random-values';

export default function App() {
  const [connected,setConnected] = useState(true);
  async function getNetworkData(){
    const data = await NetInfo.fetch();
    setConnected(data.isConnected);
  }
  useEffect(()=>{
    getNetworkData();
  },[]);
  const Drawer = createDrawerNavigator();
  return (
    
    <SafeAreaView style={styles.container}>
    {
      connected ?
      <>
      <PortfolioContextProvider>
        <TransactionContextProvider>
        <NavigationContainer>
            <Tabs/>
        </NavigationContainer>
        </TransactionContextProvider>
      </PortfolioContextProvider>
      
      </>
    : <NoInternetScreen/>
    
    
  }
    <StatusBar style="auto" backgroundColor={COLORS.primary} styles={styles.statusBarStyle} />
    </SafeAreaView>
    
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
