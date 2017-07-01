import { SAVE_THE_WEATHER, SAVE_THE_MONIES } from './reducers';

export const getTheWeather = () => dispatch => {
  fetch('http://samples.openweathermap.org/data/2.5/weather?q=Richmond,uk&appid=b1b15e88fa797225412429c1c50c122a1')
    .then(response => response.json())
    .then(response => dispatch(saveTheWeather(response)));
};

export const getTheMonies = (cur='GBP') => dispatch => {
  fetch(`http://api.fixer.io/latest?base=${cur}`)
    .then(response => response.json())
    .then(response => dispatch(saveTheMonies(response)));
};



export const saveTheWeather = payload => ({
  type: SAVE_THE_WEATHER,
  payload,
});

export const saveTheMonies = payload => ({
  type: SAVE_THE_MONIES,
  payload,
});