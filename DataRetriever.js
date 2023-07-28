const axios = require('axios').default;

printingHelper = ((response) => {
    response.data.entries.forEach(entry => {
        console.log(entry.API);
        console.log(entry.Link);
        console.log("-----------------------");
    })
});

const get_url = (callback) => {
    pulicApis = "https://api.publicapis.org/entries"
    console.log(`url is: ${pulicApis}`);
    axios.get(pulicApis).then(callback)
    .catch(err=>console.log(err));
};

get_url(printingHelper);