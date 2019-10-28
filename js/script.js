
// Fonction appelée lors du click du bouton
function start() 
{
  // Création de l'objet apiWeather
  const apiWeather = new API_WEATHER();
  // Appel de la fonction fetchTodayForecast

  apiWeather
    .fetchTodayForecast()
    .then(function(response) {
      // Récupère la donnée d'une API
      const data = response.data;

      // On récupère l'information principal
      const main = data.weather[0].main;
      const description = data.weather[0].description;
      const temp = data.main.temp;
      const icon = apiWeather.getHTMLElementFromIcon(data.weather[0].icon);

      // Modifier le DOM
      document.getElementById('today-forecast-main').innerHTML = main;
      document.getElementById('today-forecast-more-info').innerHTML = description;
      document.getElementById('icon-weather-container').innerHTML = icon;
      document.getElementById('today-forecast-temp').innerHTML = `${temp}°C`;
      
    })
    .catch(function(error) {
      // Affiche une erreur
      console.error(error);
    });
}

/*
function getThreeDaysForecast()
{

    // Création de l'objet apiWeather
    const apiWeather = new API_WEATHER();

    apiWeather
    .fetchThreeDaysForecast()
    .then(function(response) 
    {

      // Récupère la donnée d'une API
      const data = response.data;

      // On récupère l'information principal du main 
      const main =data.list[0].weather[0].main;//Demain
      const main1 =data.list[1].weather[0].main;//Après-Demain
      const main2 =data.list[2].weather[0].main;//Encore-Après-Demain

      // On récupère l'information principal de description
      const description = data.list[0].weather[0].description;
      const description1 = data.list[1].weather[0].description;
      const description2 = data.list[2].weather[0].description;

      // On récupère l'information principal de temp
      const temp = data.list[0].temp.day;
      const temp1 = data.list[1].temp.day;
      const temp2 = data.list[2].temp.day;
      
      // On récupère l'information principal de icon
      const icon = apiWeather.getHTMLElementFromIcon(data.list[0].weather[0].icon);
      const iconI = apiWeather.getHTMLElementFromIcon(data.list[1].weather[0].icon);
      const iconII = apiWeather.getHTMLElementFromIcon(data.list[2].weather[0].icon);



      // Modifier le DOM
      document.getElementById('tomorrow-forecast-main').innerHTML = main ;
      document.getElementById('tomorrow-forecast-more-info').innerHTML =description;
      document.getElementById('icon1-weather-container').innerHTML = icon;
      document.getElementById('tomorrow-forecast-temp').innerHTML = ${temp}°C;

      document.getElementById('day2-forecast-main').innerHTML = main1;
      document.getElementById('day2-forecast-more-info').innerHTML = description1;
      document.getElementById('icon2-weather-container').innerHTML = iconI;
      document.getElementById('day2-forecast-temp').innerHTML = ${temp1}°C;

      document.getElementById('day3-forecast-main').innerHTML = main2;
      document.getElementById('day3-forecast-more-info').innerHTML = description2;
      document.getElementById('icon3-weather-container').innerHTML = iconII;
      document.getElementById('day3-forecast-temp').innerHTML = ${temp2}°C;

          })
    .catch(function(error) {
      // Affiche une erreur
      console.error(error);
    });

}*/