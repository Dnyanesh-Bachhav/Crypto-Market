import axios from "axios";
const getCoins = async (pageNumber=1)=>{
    const response = await axios.get(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=INR&order=market_cap_desc&per_page=50&page=${pageNumber}&sparkline=false&price_change_percentage=24h`);
    return response.data;
}
export {getCoins};