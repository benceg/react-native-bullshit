export const SAVE_THE_WEATHER = 'SAVE_THE_WEATHER';

const initial = {
  name: 'Leigh',
  weather: null,
};

export default (state = initial, action) => {
  switch (action.type) {
    case SAVE_THE_WEATHER:
      return { ...state, weather: action.payload };
    default:
      return state;
  }
};
