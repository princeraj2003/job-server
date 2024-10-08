

// jobSearchAPIController.js
const axios = require('axios');

async function fetchDataFromJobSearchAPI(req, res) {
  const options = {
    method: 'GET',
    url: 'https://job-search-api1.p.rapidapi.com/v1/job-description-search',
    params: {
      q: 'data science internship',
      page: '1',
      country: 'india',
      city: 'gurugram',
    },
    // headers: {
    //   'X-RapidAPI-Key': 'ad3a8ebe22msh214895c63b0598ap13c572jsn601db0b8a9ca',
    // 'X-RapidAPI-Host': 'jsearch.p.rapidapi.com',
    // },
     headers: {
      'x-rapidapi-key': '07c05c07d6msh4d8b6bfafd52f1fp1a6cbfjsn1765f358b68c',
      'x-rapidapi-host': 'job-search-api1.p.rapidapi.com'
    },
  };

  try {
    const response = await axios.request(options);
    console.log(response?.data);
    res.json(response?.data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}

module.exports = {
  fetchDataFromJobSearchAPI,
};
