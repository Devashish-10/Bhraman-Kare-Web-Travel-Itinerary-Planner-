document.getElementById("submit").addEventListener('click', function (e) {
  e.preventDefault();
  var city = document.getElementById('location');
  var weatherReportElement = document.getElementById('weather-report');
  var flashcardElement = document.getElementById('flashcard');
  flashcardElement.style.display = 'none';

  var options = {
      method: 'GET',
      headers: {
          'X-RapidAPI-Key': '2935aee464mshdeec03e1b717674p1374e7jsn60313b40f0d1',
          'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
      }
  };

  fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=' + city.value, options)
      .then(function (response) {
          return response.json();
      })
      .then(function (response) {
          if (response && response.error) {
              weatherReportElement.innerHTML = '<p>An Error Occurred' + response.error.message + '</p>';
          } else {
              showWeather(response, city);
              flashcardElement.style.display = 'block';
          }
      })
      .catch(function (err) {
          console.error(err);
          weatherReportElement.innerHTML = '<p>An Unknown Error Occurred,Please Try Later';
      });
});

function showWeather(response, city) {
  var weatherReportElement = document.getElementById('weather-report');
  var weatherReport = `
      <h1 align="center"><b>Weather Report for ${city.value}</b></h1>
      <p>Cloudy: ${response.cloud_pct}</p>
      <p>Feels: ${response.feels_like}</p>
      <p>Humidity: ${response.humidity}</p>
      <p>Max Temperature: ${response.max_temp}</p>
      <p>Min Temperature: ${response.min_temp}</p>
      <p>Temperature is around: ${response.temp}</p>
      <p>Wind Degree: ${response.wind_degree}</p>
      <p>Wind Speed: ${response.wind_speed}</p>
  `;
  weatherReportElement.innerHTML = weatherReport;
}