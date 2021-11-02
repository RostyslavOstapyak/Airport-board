import moment from 'moment';

const url = 'https://api.iev.aero/api/flights';

const currentDate = moment(new Date()).format('DD-MM-YYYY');

export const fetchFlightsList = () => fetch(`${url}/${currentDate}`).then(res => res.json());
