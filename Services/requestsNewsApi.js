import axios from "axios";
const getAllNews = async(searchTerm)=>{
    console.log("Search Term: "+searchTerm);
    try{
        // const API_KEY = "ad29876714ad402d8ff6d245ca83c690";
        const API_KEY = "8f00b783f8954596834008bdbd4fc1f4";
        const url = `https://newsapi.org/v2/everything?q=${searchTerm}&apiKey=${API_KEY}`;
        const response = await axios.get(url);
        // console.log(data);
        // console.log(data.articles);
        return response.data;
    }
    catch(err){
        console.log("Error: "+ err);
    }
}

export { getAllNews };