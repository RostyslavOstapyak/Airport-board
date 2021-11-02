import { FLIGHTS_RECEIVED } from './flight.actions';

const initialState = {
  departure: [],
  arrival: [],
};

const flightsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FLIGHTS_RECEIVED: {
      return {
        ...state,
        departure: [...action.payload.departure],
        arrival: [...action.payload.arrival],
      };
    }
    default:
      return state;
  }
};

export default flightsReducer;
