

//My api key
var apikey = {
  key: 'ed7a2dce-4ae5-46eb-9c93-ec50d4680539'
}

//GET Fetch Requisition
fetch('https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest?CMC_PRO_API_KEY=' +
  apikey.key)


  .then((response) => {
    if (!response.ok) {
      throw new Error('Erro ao executar a requisição, status ' + response.status);
    }
    const resp = response.json();

    return resp;
  })
  .then((api) => {
    console.log("api", api);

    var texto = "";
    // Get 10 coins and symbols 
    for (let i = 0; i < 100; i++) {



      //Show API information

      texto = texto + `
                
                  <div class="media">
                      <img src="coin.jpg" class="align-self-center mr-3" alt="coin" width="100" height="60">
                      <div class="media-body">
                      <h2 class="mt-2">${api.data[i].name}</h2>
                      <p>SIMBOLO: ${api.data[i].symbol}</p>
                      <p>RANKING:${api.data[i].cmc_rank}</p>
                      <p>VOLUME EM 24H: ${api.data[i].quote.USD.volume_24h.toFixed(3)}</p>
                      <p>PREÇO: $${api.data[i].quote.USD.price.toFixed(2)}</p>
                   
                      




                      </div>
                  </div>
             
                  `;





      document.getElementById("coins").innerHTML = texto;

    }
  })
  .catch((error) => {
    console.log(error);
  });
