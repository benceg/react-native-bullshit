import { SAVE_THE_WEATHER } from './reducers';

export const getTheWeather = () => dispatch => {
  fetch('http://samples.openweathermap.org/data/2.5/weather?q=Richmond,uk&appid=b1b15e88fa797225412429c1c50c122a1')
    .then(response => response.json())
    .then(response => dispatch(saveTheWeather(response)));
};

export const saveTheWeather = payload => ({
  type: SAVE_THE_WEATHER,
  payload,
});
