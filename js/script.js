// Fonction appelée lors du click du bouton
function start() 
{
  // Création de l'objet apiWeather
  const apiWeather = new API_WEATHER();
  // Appel de la fonction fetchTodayForecast

  apiWeather.fetchTodayForecast().then(function(response) 
  {
      // Récupère la donnée d'une API
      const data = response.data;

      // On récupère l'information principale
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
    .catch(function(error) 
    {
      // Affiche une erreur
      console.error(error);
    });
}

function getThreeDaysForecast()
{

    // Création de l'objet apiWeather
    const apiWeather = new API_WEATHER();

    apiWeather.fetchThreeDaysForecast().then(function(response) 
    {

      // Récupère la donnée d'une API
      const data = response.data;

      // On récupère l'information principale du main 
      const mainD1 =data.list[0].weather[0].main;//Demain
      const mainD2 =data.list[1].weather[0].main;//Après-Demain
      const mainD3 =data.list[2].weather[0].main;//Encore-Après-Demain

      // On récupère l'information principale de description
      const descriptionD1 = data.list[0].weather[0].description;
      const descriptionD2 = data.list[1].weather[0].description;
      const descriptionD3 = data.list[2].weather[0].description;

      // On récupère l'information principale de temp
      const tempD1 = data.list[0].temp.day;
      const tempD2 = data.list[1].temp.day;
      const tempD3 = data.list[2].temp.day;
      
      // On récupère l'information principale de icon
      const iconD1 = apiWeather.getHTMLElementFromIcon(data.list[0].weather[0].icon);
      const iconD2 = apiWeather.getHTMLElementFromIcon(data.list[1].weather[0].icon);
      const iconD3 = apiWeather.getHTMLElementFromIcon(data.list[2].weather[0].icon);

      // Modifier le DOM
      document.getElementById('DAY1-forecast-main').innerHTML = mainD1 ;
      document.getElementById('DAY1-forecast-more-info').innerHTML =descriptionD1;
      document.getElementById('DAY1-weather-container').innerHTML = iconD1;
      document.getElementById('DAY1-forecast-temp').innerHTML = `${tempD1}°C`;

      document.getElementById('DAY2-forecast-main').innerHTML = mainD2;
      document.getElementById('DAY2-forecast-more-info').innerHTML = descriptionD2;
      document.getElementById('DAY2-weather-container').innerHTML = iconD2;
      document.getElementById('DAY2-forecast-temp').innerHTML = `${tempD2}°C`;

      document.getElementById('DAY3-forecast-main').innerHTML = mainD3;
      document.getElementById('DAY3-forecast-more-info').innerHTML = descriptionD3;
      document.getElementById('DAY3-weather-container').innerHTML = iconD3;
      document.getElementById('DAY3-forecast-temp').innerHTML = `${tempD3}°C`;

    })
    .catch(function(error) 
    {
      // Affiche une erreur
      console.error(error);
    });
}