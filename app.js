const express = require("express");
const https = require("https");

const app = express();

const port = 1552;

app.get("/", function (req, res) {
  const url =
    "https://api.openweathermap.org/data/2.5/weather?q=Tallinn&appid=75c51364a7e854e69766c9410d99c808&units=metric";
  https.get(url, function (res) {
    console.log(res.statusCode);
    res.on("data", function (data) {
      const weatherData = JSON.parse(data);
      console.log(weatherData);
      const temp = weatherData.main.temp;
      console.log(temp);
      const description = weatherData.weather[0].description;
      console.log(description);
    });
  });
  res.send("app is up and running");
});
app.listen(port, function () {
  console.log(`App is running on port ${port}`);
});
