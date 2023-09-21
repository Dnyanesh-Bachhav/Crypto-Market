import axios from "axios";
import { Configuration, OpenAIApi } from "openai";
const API_KEY = "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";
// OpenAIApi.apiKey = API_KEY;

const getCoins = async (pageNumber=1)=>{
    try{
        const response = await axios.get(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=INR&order=market_cap_desc&per_page=50&page=${pageNumber}&sparkline=false&price_change_percentage=24h`);
        return response.data;
    }
    catch(e){
        console.log("Error"+e);
    }
}
const getTopCoins = async (pageNumber=1)=>{
    try{
        const response = await axios.get(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=INR&order=market_cap_desc&per_page=10&page=${pageNumber}&sparkline=false&price_change_percentage=24h`);
        return response.data;
    }
    catch(e){
        console.log("Error"+e);
    }
}
const getMarketHighChangedData = async ()=>{
    try{
        const response = await axios.get(`https://api.coingecko.com/api/v3/coins/categories?order=market_cap_change_24h_desc`);
        console.log("Response: "+response);
        return response.data;
    }
    catch(e){
        console.log("Error"+e);
    }
}
const getCoinDataById = async (coinId)=>{
    try{
        console.log("Coin name: "+coinId);
        const response = await axios.get(`https://api.coingecko.com/api/v3/coins/${coinId}?localization=true&tickers=true&market_data=true&community_data=true&developer_data=true&sparkline=true`);
        return response.data;
    }
    catch(e){
        console.log("Coin Error"+e);
    }
}
const getCoinHistory = async (coinId)=>{
    try{
        const response = await axios.get(`https://api.coingecko.com/api/v3/coins/${coinId}/market_chart?vs_currency=INR&days=30&interval=daily`);
        return response.data;
    }
    catch(e){
        console.log("Error"+e);
    }
}
const getAllCoins = async ()=>{
    try{
        const response = await axios.get(`https://api.coingecko.com/api/v3/coins/list?include_platform=false`);
        return response.data;
    }
    catch(e){
        console.log("Error"+e);
    }
}

const getGreedAndFearIndex = async ()=>{
    const options = {
      method: 'GET',
      url: 'https://fear-and-greed-index.p.rapidapi.com/v1/fgi',
      headers: {
        'X-RapidAPI-Key': 'd31707d86bmsh91925082bd9357dp154bddjsnc26d58a2b380',
        'X-RapidAPI-Host': 'fear-and-greed-index.p.rapidapi.com'
      }
    };
    try{
        const response = await axios.request(options);
        console.log(response.data);
        return response.data;
    }
    catch(e)
    {
        console.log("Error occured: "+e);
    }

}
const getChatbotReply1 = async (message) => {
    const response = await axios.get("https://coinstack-backend.vercel.app/api/hello", JSON.stringify({
        message
    }));
    console.log("In a request: "+response.data.result);
    return response.data.result;

}

export const getWatchlistedCoins = async (pageNumber = 1, coinIds) => {
    try {
      const response = await axios.get(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=INR&ids=${coinIds}&order=market_cap_desc&per_page=50&page=${pageNumber}&sparkline=false&price_change_percentage=24h`);
      return response.data;
    } catch (e) {
      console.log(e);
    }
  }
  
export {getCoins,getTopCoins,getMarketHighChangedData,getCoinHistory,getCoinDataById,getAllCoins,getGreedAndFearIndex, getChatbotReply1 };













