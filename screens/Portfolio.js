import react,{ useState,useEffect,useContext } from "react";
import {View,Text,StyleSheet,Modal,ScrollView,TouchableOpacity,RefreshControl} from 'react-native';
import InvestCoinCard from "../components/PortfolioScreen/InvestCoinCard";
import InvestmentInfo from "../components/PortfolioScreen/InvestmentInfo";
import { AntDesign } from '@expo/vector-icons';
import InfoModal from "../components/PortfolioScreen/InfoModal";
import { COLORS } from "../components/constants";
import NetInfo from '@react-native-community/netinfo';
import NoInternetScreen from "./NoInternetScreen";
import { Entypo } from '@expo/vector-icons';
import InfoText from "../components/PortfolioScreen/InfoText";
import { portfolioContext } from "../Contexts/PortfolioContext";
import NoCoin from "../components/PortfolioScreen/NoCoin";
import { MaterialIcons } from '@expo/vector-icons';
function PortfolioScreen(){
  const {portfolioCoins,removeAllCoins } = useContext(portfolioContext);
    const [connected,setConnected] = useState(true);
    const [visible,setVisible] = useState(false);
    const [invested,setInvested] = useState(0);
    const [current,setCurrent] = useState(0);
    const calculatePortfolio = (portfolioCoins)=>{
      let invested1=0,current1=0;
      portfolioCoins.map((item)=>{
        invested1 += item.price*item.quantity;
        current1 += item.price*item.quantity;
      });
      setInvested(Math.round(invested1));
      setCurrent(Math.round(current1));
    }
    const checkConnection = async ()=>{
        const data = await NetInfo.fetch();
        setConnected(data.isConnected);
    }
    const ModalPopUp = ({visible,children})=>{
        return(
          <Modal transparent visible={visible}>
            <View style={styles.modalContainer}>
              <View style={styles.modalData}>
                {children}
              </View>
            </View>
          </Modal>
        );
      }
      
    useEffect(()=>{
        checkConnection();
        calculatePortfolio(portfolioCoins);
    },[]);
    return (
      <>
        {connected ? (
          <View style={styles.container}>
          <View style={{display: 'flex',alignItems: 'center', flexDirection: 'row',justifyContent: 'space-between'}} >
          <View>

          <Text style={{fontWeight: 'bold',color: COLORS.primary,marginLeft: 10,fontSize: 20}}>Portfolio</Text>
          </View>
          <TouchableOpacity onPress={()=>{
            removeAllCoins();
            setInvested(0);
            setCurrent(0);
          }}>
            <View style={{display: 'flex', flexDirection: 'row',alignSelf: 'flex-end', justifyContent: 'center',alignItems: 'center',backgroundColor: COLORS.primary,padding: 5, paddingHorizontal: 10, borderRadius: 10,marginRight: 10 }} >
              <Text style={{color: COLORS.white, }} >Clear</Text>
              <MaterialIcons name="delete-sweep" size={20} color="white" style={{marginLeft: 5}} />
            </View>
          </TouchableOpacity>

          </View>
            <ModalPopUp visible={visible}>
              <View>
                <View style={styles.modalHeader}>
                  <TouchableOpacity onPress={() => setVisible(false)}>
                    <Entypo name="cross" size={32} color="black" />
                  </TouchableOpacity>
                </View>
                <InfoText/>
              </View>
            </ModalPopUp>
            <ScrollView
              showsVerticalScrollIndicator={false}
              contentContainerStyle={{ paddingBottom: 10 }}
              refreshControl={
                <RefreshControl
                  onRefresh={checkConnection}
                />
              }
            >
              <InvestmentInfo invested={invested} current={current} />
              <InfoModal setVisible={ setVisible } />
              {
                portfolioCoins.length > 0 ? 
                ( portfolioCoins.map((item,index)=>(
                  <InvestCoinCard coinId={item.name} quantity={item.quantity} price={`${Math.round(item.price*item.quantity)}`} imgSrc={item.imgSrc} key={index} setInvested={setInvested} setCurrent={setCurrent} />
                  )))
                : <NoCoin/>
            }

            </ScrollView>
          </View>
        ) : (
          <NoInternetScreen />
        )}
      </>
    );
}
const styles = StyleSheet.create({
    container:{
        flex: 1,
        padding: 16,
        backgroundColor: COLORS.secondary,
    },
    modalContainer:{
        flex: 1,
        backgroundColor: 'rgba(0,0,0,0.5)',
        justifyContent: 'center',
        alignItems: 'center',
      },
      modalData:{
        width: '85%',
        height: '34%',
        backgroundColor: COLORS.white,
        borderRadius: 10,
        elevation: 10
    
      },
      modalHeader:{
        width: '100%',
        alignItems: 'flex-end'
      }
})
export default PortfolioScreen;