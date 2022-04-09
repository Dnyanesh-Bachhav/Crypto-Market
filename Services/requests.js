import axios from "axios";
const getCoins = async (pageNumber=1)=>{
    try{
        const response = await axios.get(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=INR&order=market_cap_desc&per_page=50&page=${pageNumber}&sparkline=false&price_change_percentage=24h`);
        return response.data;
    }
    catch(e){
        console.log("Error"+e);
    }
}
const getMarketHighChangedData = async ()=>{
    try{
        const response = await axios.get(`https://api.coingecko.com/api/v3/coins/categories?order=market_cap_change_24h_desc`);
        return response.data;
    }
    catch(e){
        console.log("Error"+e);
    }
}
export {getCoins,getMarketHighChangedData};