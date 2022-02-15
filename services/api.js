import axios from "axios";
import { Alert } from "react-native";

export default function apiPage(stream, genre){
  let page;

  if(stream === 'netflix'){
    switch(genre) {
      case 6:
        page = 6;
        break;
      case 99:
        page = 18;
        break;
      case 14:
        page = 14;
        break;
      case 1:
        page = 5;
        break;
      case 10402:
        page = 4;
        break;
      case 10749:
        page = 3;
        break;
      case 10751:
        page = 45;
        break;
      case 10752:
        page = 1;
        break;
      case 10764:
        page = 1;
        break;
      case 12:
        page = 51;
        break;
      case 16:
        page = 27;
        break;
      case 18:
        page = 15;
        break;
      case 27:
        page = 1;
        break;
      case 28:
        page = 36;
        break;
      case 35:
        page = 89;
        break;  
      case 36:
        page = 8;
        break;
      case 4:
        page = 4;
        break;
      case 5:
        page = 7;
        break;
      case 7:
        page = 0;
        break;
      case 878:
        page = 9;
        break;
      case 9648:
        page = 15;
        break;
      case 37:
        page = 2;
        break;
      case 80:
        page = 26;
        break;
      case 9648:
        page = 15;
        break;
      default:
        page = 1;
    }
  }else if(stream === 'disney'){
    switch(genre) {
      case 6:
        page = 6;
        break;
      case 99:
        page = 18;
        break;
      case 14:
        page = 14;
        break;
      case 1:
        page = 5;
        break;
      case 10402:
        page = 4;
        break;
      case 10749:
        page = 3;
        break;
      case 10751:
        page = 45;
        break;
      case 10752:
        page = 1;
        break;
      case 10764:
        page = 1;
        break;
      case 12:
        page = 51;
        break;
      case 16:
        page = 27;
        break;
      case 18:
        page = 15;
        break;
      case 27:
        page = 1;
        break;
      case 28:
        page = 17;
        break;
      case 35:
        page = 40;
        break;  
      case 36:
        page = 3;
        break;
      case 4:
        page = 2;
        break;
      case 5:
        page = 4;
        break;
      case 7:
        page = 0;
        break;
      case 878:
        page = 6;
        break;
      case 9648:
        page = 1;
        break;
      case 37:
        page = 1;
        break;
      case 80:
        page = 3;
        break;
      case 9648:
        page = 1;
        break;
      default:
        page = 1;
    }
  }else if(stream === 'prime'){
    switch(genre) {
      case 6:
        page = 2;
        break;
      case 99:
        page = 54;
        break;
      case 14:
        page = 17;
        break;
      case 1:
        page = 18;
        break;
      case 10402:
        page = 14;
        break;
      case 10749:
        page = 48;
        break;
      case 10751:
        page = 23;
        break;
      case 10752:
        page = 10;
        break;
      case 10764:
        page = 0;
        break;
      case 12:
        page = 40;
        break;
      case 16:
        page = 9;
        break;
      case 18:
        page = 166;
        break;
      case 27:
        page = 64;
        break;
      case 28:
        page = 66;
        break;
      case 35:
        page = 118;
        break;  
      case 36:
        page = 14;
        break;
      case 4:
        page = 6;
        break;
      case 5:
        page = 7;
        break;
      case 7:
        page = 0;
        break;
      case 878:
        page = 23;
        break;
      case 9648:
        page = 34;
        break;
      case 37:
        page = 22;
        break;
      case 80:
        page = 59;
        break;
      case 9648:
        page = 34;
        break;
      default:
        page = 1;
    }
  }else if(stream === 'paramount'){
    switch(genre) {
      case 6:
        page = 3;
        break;
      case 99:
        page = 22;
        break;
      case 14:
        page = 7;
        break;
      case 1:
        page = 7;
        break;
      case 10402:
        page = 8;
        break;
      case 10749:
        page = 21;
        break;
      case 10751:
        page = 21;
        break;
      case 10752:
        page = 7;
        break;
      case 10764:
        page = 0;
        break;
      case 12:
        page = 28;
        break;
      case 16:
        page = 5;
        break;
      case 18:
        page = 73;
        break;
      case 27:
        page = 26;
        break;
      case 28:
        page = 30;
        break;
      case 35:
        page = 63;
        break;  
      case 36:
        page = 7;
        break;
      case 4:
        page = 6;
        break;
      case 5:
        page = 2;
        break;
      case 7:
        page = 0;
        break;
      case 878:
        page = 13;
        break;
      case 9648:
        page = 18;
        break;
      case 37:
        page = 22;
        break;
      case 80:
        page = 30;
        break;
      case 9648:
        page = 18;
        break;
      default:
        page = 1;
    }
  }

  api(stream, genre, page);
  
};

function api(stream, genre, page) {
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

  // if(page === 0) 
  //   Alert.alert("Não temos filmes desse gênero");
  
  axios.request(options).then(function (response) {
    console.log (response.data.results[2])
  }).catch(function (error) {
      console.error(error);
  });

};
