import react,{ useState,useEffect, useContext,createContext} from "react";
export const transactionContext = createContext();
import AsyncStorage from '@react-native-async-storage/async-storage';
function TransactionContextProvider({children}){
    const[transactions, setTransactions] = useState([]);
    const getTransactions = async ()=>{
        try{
            const jsonValue = await AsyncStorage.getItem("@transactions");
            setTransactions(jsonValue != null ? JSON.parse(jsonValue) : []);
        }catch(err){
            console.log("Context: "+err);
        }
    }
    // const updatePortfolioCoins = async(newList)=>{
    //     try{
    //         const jsonValue = JSON.stringify(newList);
    //         await AsyncStorage.setItem("@portfolio_coins",jsonValue);
    //         setPortfolioCoins(newList);
    //     }catch(err)
    //     {
    //         console.log("Error: "+err);
    //     }
    // }
    const  storeTransaction  = async (transaction)=>{
        try{
            const newList = [...transactions, transaction];
            const jsonValue = JSON.stringify(newList);
            await AsyncStorage.setItem("@transactions",jsonValue);
            setTransactions(newList);
        }catch(err){
            console.log("Context: "+err);
        }
    }
    // const mergeCoin = async (coin)=>{
    //     const jsonValue = JSON.stringify(coin);
    //     console.log("Coin to update: "+ jsonValue);
    //     const data = await AsyncStorage.mergeItem("@portfolio_coins",jsonValue);
    //     console.log("Coin data: "+ data);
    //     setTransactions(data);
    // }
    const removeAllTransactions = async ()=>{
        const array1 = [];
        const jsonValue = JSON.stringify(array1);
        await AsyncStorage.setItem("@transactions",jsonValue);
        setTransactions(array1);
    }
    useEffect(()=>{
        getTransactions();
        // removeAllTransactions();
    },[]);
    return(
        <transactionContext.Provider value={{ transactions, storeTransaction }} >
            {children}
        </transactionContext.Provider>
    );
}
export default TransactionContextProvider;