export const SAVE_THE_WEATHER = 'SAVE_THE_WEATHER';
export const SAVE_THE_MONIES = 'SAVE_THE_MONIES';
export const UPDATE_USER_CURRENCY = 'UPDATE_USER_CURRENCY';

const initial = {
  name: 'Leigh',
  weather: null,
  monies: null,
  userCurrency: 'GBP',
};

export default (state = initial, action) => {
  switch (action.type) {
    case SAVE_THE_WEATHER:
      return { ...state, weather: action.payload };
    case SAVE_THE_MONIES:
      return { ...state, monies: action.payload };
    case UPDATE_USER_CURRENCY:
      return { ...state, userCurrency: action.payload };
    default:
      return state;
  }
};
