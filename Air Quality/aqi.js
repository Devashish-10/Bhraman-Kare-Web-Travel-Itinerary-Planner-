document.getElementById("submit").addEventListener('click', function (e) {
  e.preventDefault();
  var city = document.getElementById('location');
  var airReportElement = document.getElementById('airquality-report');
  var flashcardElement = document.getElementById('flashcard');
  flashcardElement.style.display = 'none';

  var options = {
      method: 'GET',
      headers: {
          'X-RapidAPI-Key': '2935aee464mshdeec03e1b717674p1374e7jsn60313b40f0d1',
          'X-RapidAPI-Host': 'air-quality-by-api-ninjas.p.rapidapi.com'
      }
  };

  fetch('https://air-quality-by-api-ninjas.p.rapidapi.com/v1/airquality?city=' + city.value, options)
      .then(function (response) {
          return response.json();
      })
      .then(function (response) {
          if (response && response.error) {
              airReportElement.innerHTML = '<p>An Error Occurred' + response.error.message + '</p>';
          } else {
              showaqiReport(response, city);
              flashcardElement.style.display = 'block';
          }
      })
      .catch(function (err) {
          console.error(err);
          airReportElement.innerHTML = '<p>An Unknown Error Occurred,Please Try Later';
      });
});

function showaqiReport(response, city) {
  var airReportElement = document.getElementById('airquality-report');
  var airReport = `
      <h1><b>Air Quality Report for ${city}</b></h1>
      <p><b>Overall AQI: </b> ${response.overall_aqi}</p>
      <h2>Analysis of Individual Pollutants:</h2>
      <ul>
          <li><b>CO:</b> AQI ${response.CO.aqi} - Concentration ${response.CO.concentration}</li>
          <li><b>NO2:</b> AQI ${response.NO2.aqi} - Concentration ${response.NO2.concentration}</li>
          <li><b>O3:</b> AQI ${response.O3.aqi} - Concentration ${response.O3.concentration}</li>
          <li><b>SO2:</b> AQI ${response.SO2.aqi} - Concentration ${response.SO2.concentration}</li>
          <li><b>PM2.5:</b> AQI ${response['PM2.5'].aqi} - Concentration ${response['PM2.5'].concentration}</li>
          <li><b>PM10:</b> AQI ${response.PM10.aqi} - Concentration ${response.PM10.concentration}</li>
      </ul> 
  `;
  airReportElement.innerHTML = airReport;
}