import axios from "axios";

async function getTopCoinsCoinMarketCap(){
    let response = null;
    
        try {
          response = await axios.get('https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest', {
            headers: {
              'X-CMC_PRO_API_KEY': 'c8b0373c-1448-4686-865e-b358504632e6',
            },
          });
        } catch(ex) {
          response = null;
          // error
          console.log(ex);
          reject(ex);
        }
        if (response) {
          // success
          const json = response.data;
        //   console.log(json);
        //   console.log(json.data[0]);
        return json;
        }
      
}
async function getExchanges(){

    let response = null;
    
    try {
        response = await axios.get('https://pro-api.coinmarketcap.com/v1/exchange/info', {
            headers: {
                'X-CMC_PRO_API_KEY': 'c8b0373c-1448-4686-865e-b358504632e6',
            },
        });
    } catch(ex) {
        response = null;
        // error
        console.log("Error:"+ex);
    }
    if (response) {
        // success
        const json = response.data;
        console.log("Data:"+json);
        return json;
    }
}
    export {getTopCoinsCoinMarketCap,getExchanges};