export default function api(stream, genre, page) {
  let numPage = Math.floor(Math.random() * page) + 1 ;
  
  return ({
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
      'X-RapidAPI-Key': '4123081fe8msh9b739bdb23b939cp12b6a3jsn6fec55cff028',
      'X-RapidAPI-Host': 'streaming-availability.p.rapidapi.com'
    }
  })
};
