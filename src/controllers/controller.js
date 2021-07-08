const axios = require('axios');
const Weather = require('../model/Weather');

const API_KEY = '68fccef9cf5a1c5c0203ce8302a891b1';

exports.renderHomePage = (req, res) => {
  res.render('index');
};

exports.renderAboutPage = (req, res) => {
  res.render('about');
};

exports.getWeather = (req, res) => {
  const { city } = req.body;
  const url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&appid=${API_KEY}`;
  const weather = new Weather(req.body.city);
  weather.validateUserInput();
  if (weather.errors.length) {
    res.render('index', {
      error: weather.errors.toString(),
    });
  } else {
    axios.get(url).then((response) => {
      const { temp: temperature } = response.data.main;
      const { name: location } = response.data;
      res.render('index', {
        weather: `it is currently ${temperature} in ${location}`,
      });
    }).catch((error) => {
      console.log(error);
    });
  }
};
