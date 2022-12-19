export default function api(stream, genre, page) {
  let numPage = Math.floor(Math.random() * page);
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
      'X-RapidAPI-Key': 'e3c33bc64bmshcb960fa0796bac4p1cd162jsn2ec94e46711f',
      'X-RapidAPI-Host': 'streaming-availability.p.rapidapi.com'
    }
  })
};
