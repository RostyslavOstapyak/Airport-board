import { fetchFlightsList } from './flightGateway';

export const FLIGHTS_RECEIVED = 'FLIGHTS_RECEIVED';

export const flightsReceived = flightsList => ({
  type: FLIGHTS_RECEIVED,
  payload: flightsList,
});

export const getFlightsList = () => {
  const thunkAction = dispatch => {
    fetchFlightsList().then(flightsList => dispatch(flightsReceived(flightsList.body)));
  };
  return thunkAction;
};
