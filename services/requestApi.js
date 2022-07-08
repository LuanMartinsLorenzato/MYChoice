import axios from "axios";
  let title;

  export default function api(stream, genre, page) {
    let numPage = Math.floor(Math.random() * page) + 1 ;
  
    const options = {
      method: 'GET',
      url: 'https://streaming-availability.p.rapidapi.com/search/basic',
      params: {
      country: 'us',
      genre: `${genre}`,
      page: `${numPage}`,
      service: `${stream}`,
      type: 'movie',
      output_language: 'en',
      language: 'en'
      },
      headers: {
        'x-rapidapi-host': 'streaming-availability.p.rapidapi.com',
        'x-rapidapi-key': '4123081fe8msh9b739bdb23b939cp12b6a3jsn6fec55cff028'
      }
    };
    axios.request(options).then(function (response) {
      title = response.data.results[1].title;
    }).catch(function (error) {
      console.error(error);
    });
};
