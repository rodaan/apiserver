/* eslint-disable no-console */
import openweather from 'openweather';

const getWeather = (req, res) => {
  const key = req.body.key || null;
  console.log('req is', req.body);
  console.log('openWeather', openweather);
  const queryObj = {
    city: req.body.query,
  };
  openweather.openWeather(queryObj, (result) => res.send(result), key);
};

export default { getWeather };
