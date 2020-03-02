const axios = require('axios').default;
const fs = require('fs');

axios({
    method: 'get',
    url: 'https://rickandmortyapi.com/api/character/393',
    responseType: 'JSON'
  })
    .then(response => 
      fs.writeFileSync('rickAndMorty.txt', 
      `${JSON.stringify(response.data.name)}
${JSON.stringify(response.data.gender)}
${JSON.stringify(response.data.status)}
${JSON.stringify(response.data.species)}
${JSON.stringify(response.data.origin)}`
      ));