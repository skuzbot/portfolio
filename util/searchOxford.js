const axios = require('axios');
require('dotenv').config()


const searchOxford = (q) => {
  return new Promise((resolve, reject) => {
    axios.get(`https://od-api.oxforddictionaries.com/api/v1/entries/en/${q}/regions=us`, {
      headers: {
        Accept: "application/json",
        app_id: process.env.oxford_id,
        app_key: process.env.oxford_key,
      }
    })
    .then((res) => {
      resolve(res.data.results);
    })
    .catch(e => {
      console.error(e);
      reject(e);
    })
  })
}

module.exports.searchOxford = searchOxford;