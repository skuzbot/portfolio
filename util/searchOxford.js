import axios from 'axios';
require('dotenv').config()


module.exports.searchOxford = (q) => {
  return new Promise((resolve, reject) => {
    axios.get(`https://od-api.oxforddictionaries.com/api/v1/entries/en/${q}/regions=us`)
  })
}
