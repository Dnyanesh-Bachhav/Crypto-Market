import banner1 from '../assets/banner1.png';
import banner2 from '../assets/banner2.png';
import banner3 from '../assets/banner3.png';
import banner4 from '../assets/banner4.png';
import banner5 from '../assets/banner5.png';
const COLORS = {
    primary: '#211DDD',
    secondary: '#EBEBFE',
    white: '#ffffff',
    black: '#000000',
    gray: '#C4C4C4',
    grayDark: '#A39F9F',
    success: '#067A0A',
    lightGreen: '#E2F0E5',
    red: '#780606',
    lightRed: '#ffe6e6',
    brown: '#d17338',
    grey: "#64748B",
    purple: "#1E293B",
}
const MostGainedCoins = [
    {
      id: 1,
      name: 'Bitcoin',
      market_cap_change_24h: 21,
      price: 2763656,
      imgSrc: 'https://assets.coingecko.com/coins/images/1/large/bitcoin.png'
    },
    {
      id: 2,
      name: 'Ethereum',
      market_cap_change_24h: 12,
      price: 206980,
      imgSrc: 'https://assets.coingecko.com/coins/images/279/large/ethereum.png'
    },
    {
      id: 3,
      name: 'Decentraland',
      market_cap_change_24h: 6,
      price: 76.96,
      imgSrc: 'https://assets.coingecko.com/coins/images/325/large/Tether-logo.png'
    },
    {
      id: 4,
      name: 'Gala',
      market_cap_change_24h: 28,
      price: 10.71,
      imgSrc: 'https://assets.coingecko.com/coins/images/12493/large/GALA-COINGECKO.png',
    },
    {
      id: 5,
      name: 'Theta',
      market_cap_change_24h: 34,
      price: 169.01,
      imgSrc: 'https://assets.coingecko.com/coins/images/2538/large/theta-token-logo.png'
    },
  ]
  const MostGainedCoins2 = [
    {
      id: 1,
      name: 'Bitcoin',
      percentage: 5.8,
      price: "1,402,338",
      imgSrc: 'https://assets.coingecko.com/coins/images/1/large/bitcoin.png'
    },
    {
      id: 2,
      name: 'Ethereum',
      percentage: 4.9,
      price: "103,670",
      imgSrc: 'https://assets.coingecko.com/coins/images/279/large/ethereum.png'
    },
    {
      id: 3,
      name: 'Decentraland',
      percentage: 4.7,
      price: "34.42",
      imgSrc: 'https://assets.coingecko.com/coins/images/325/large/Tether-logo.png'
    },
    {
      id: 4,
      name: 'Gala',
      percentage: 4.5,
      price: "2.29",
      imgSrc: 'https://assets.coingecko.com/coins/images/12493/large/GALA-COINGECKO.png',
    },
    {
      id: 5,
      name: 'Theta',
      percentage: 4.5,
      price: "73.63",
      imgSrc: 'https://assets.coingecko.com/coins/images/2538/large/theta-token-logo.png'
    },
  ];
  const profitCoins = [
    {
      id: 1,
      name: 'Alpaca Finance',
      percentage: 45,
      price: "23.09",
      imgSrc: 'https://assets.coingecko.com/coins/images/14165/large/Logo200.png'
    },
    {
      id: 2,
      name: 'Theta',
      percentage: 40,
      price: "73.63",
      imgSrc: 'https://assets.coingecko.com/coins/images/2538/large/theta-token-logo.png'
    },
    {
      id: 3,
      name: 'Enjin Coin',
      percentage: 34,
      price: "26.01",
      imgSrc: 'https://assets.coingecko.com/coins/images/1102/large/enjin-coin-logo.png'
    },
    {
      id: 4,
      name: 'Wax',
      percentage: 28.84,
      price: "4.87",
      imgSrc: 'https://assets.coingecko.com/coins/images/1372/large/WAX_Coin_Tickers_P_512px.png'
    },
    {
      id: 5,
      name: 'Shiba Inu',
      percentage: 24.42,
      price: "0.00077269",
      imgSrc: 'https://assets.coingecko.com/coins/images/11939/large/shiba.png'
    },
  ];
  const lossCoins = [
    {
      id: 1,
      name: 'Sushi',
      percentage: -33.2
    },
    {
      id: 2,
      name: 'Apecoin',
      percentage: -22.24
    },
    {
      id: 3,
      name: 'COTI',
      percentage: -14.43
    },
    {
      id: 4,
      name: 'Tether',
      percentage: -5.04
    },
    {
      id: 5,
      name: 'Stacks',
      percentage: -4.42
    },
  ];
  const trustedCoins = [
    {
      id: 1,
      name: 'Bitcoin',
      percentage: 45
    },
    {
      id: 2,
      name: 'Ethereum',
      percentage: 40
    },
    {
      id: 3,
      name: 'BNB',
      percentage: 34
    },
    {
      id: 4,
      name: 'Solana',
      percentage: 28.84
    },
    {
      id: 5,
      name: 'Cardano',
      percentage: 24.42
    },
  ];
  const memeCoins = [
    {
      id: 1,
      name: 'Shiba Inu',
      percentage: 45
    },
    {
      id: 2,
      name: 'Dogecoin',
      percentage: 40
    },
    {
      id: 3,
      name: 'Saitama',
      percentage: 34
    },
    {
      id: 4,
      name: ' Puli',
      percentage: 28.84
    },
    {
      id: 5,
      name: 'Babydogecoin',
      percentage: 24.42
    },
  ];
  const banners = [
    {
      id: 1,
      imgSrc: banner1,
    },
    {
      id: 2,
      imgSrc: banner2,
    },
    {
      id: 3,
      imgSrc: banner3,
    },
    {
      id: 4,
      imgSrc: banner4,
    },
    {
      id: 5,
      imgSrc: banner5,
    }
  ]
  
  
export {COLORS,MostGainedCoins,MostGainedCoins2,profitCoins,lossCoins,trustedCoins,memeCoins,banners  };