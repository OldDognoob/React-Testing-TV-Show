// import React from 'react';
import axios from 'axios';


export const fetchShow=()=>{
    return axios 
    .get("https://api.tvmaze.com/singlesearch/shows?q=stranger-things&embed=episodes")
    .then(res=>{
        return res
    })
    .catch(error =>{
        console.error("error fetching data from api, error: ", err.message);
    return error;
    });
};
