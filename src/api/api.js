// import axios from 'axios';


// const URL='https://image.tmdb.org/t/p/w500';
// const API_KEY = 'a8493469a083457e88e2a6c0c05a384b';

// console.log(API_KEY);

// const endpoints ={
//     originals:"/discover/tv",
//     trending:"/trending/all/week",
//     now_playing:"/movie/now_playing",
//     popular:"/movie/popular",
//     top_rated:"/movie/top_rated",
//     upcoming:"/movie/upcoming",
// };

// export const fetchData = (param)=>{
//     return axios.get(`${URL}${endpoints[param]}?api_key=${API_KEY}`)
// }

import axios from "axios";

const URL = "https://api.themoviedb.org/3";
const API_KEY = "a8493469a083457e88e2a6c0c05a384b";


const endpoints = {
    originals: "/discover/tv",
    trending: "/trending/all/week",
    now_playing: "/movie/now_playing",
    popular: "/movie/popular",
    top_rated: "/movie/top_rated",
    upcoming: "/movie/upcoming",
};

export const fetchData = (param) => {
    return axios.get(`${URL}${endpoints[param]}?api_key=${API_KEY}`)
}