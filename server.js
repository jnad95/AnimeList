const express = require("express");
const path = require('path');

const app = express();
app.set('view engine','ejs');

const port = 3000;
const host = "localhost";

/* ----- */
const axios = require('axios').default;

callback = ((response) => {
    const data = {}
    //console.log(response)
    console.log(response.data.pagination)
    console.log(response.data.data)
    /*
    response.data.entries.forEach(entry => {
        console.log(entry.API);
        console.log(entry.Link);
        console.log("-----------------------");
        data[entry.API] = entry.Link;
    });
    */
    return data;
});

const get_url = (callback) => {
    pulicApis = "https://api.jikan.moe/v4/top/anime";
    //"https://api.jikan.moe/v4/anime/1/videos";
    //"https://jikan.moe/"; 
    //"https://api.publicapis.org/entries"
    console.log(`url is: ${pulicApis}`);
    return axios.get(pulicApis).then(callback)
    .catch(err=>console.log(err));
};

/* ---reoutes-- */

app.listen(port, ()=> {
    console.log(`listening to port ${port}`);
});