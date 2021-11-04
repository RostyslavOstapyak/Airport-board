import moment from 'moment';

const prepareFlightsList = (flightsList, flightType, q) => {
  if (flightsList.length <= 0) {
    return null;
  }

  const currentDay = moment(new Date()).format('MM-DD');

  const slicedFlightsList = flightType ? flightsList.arrival : flightsList.departure;

  const filteredList = flightType
    ? slicedFlightsList.filter(
        flightItem => moment(new Date(flightItem.timeArrShedule)).format('MM-DD') === currentDay,
      )
    : slicedFlightsList.filter(
        flightItem => moment(new Date(flightItem.timeDepShedule)).format('MM-DD') === currentDay,
      );
  const result = filteredList.map(flight => {
    const localTime = moment(flight.timeDepShedule).format('HH:mm');
    const timeStatus = moment(flight.timeTakeofFact).format('HH:mm');

    let statusUa;
    switch (flight.status) {
      case 'DP':
        statusUa = `Вилетів о ${timeStatus}`;
        break;
      case 'LN':
        statusUa = `Прибув о ${timeStatus}`;
        break;
      case 'FR':
        statusUa = 'В польоті';
        break;
      case 'ON':
        statusUa = 'Вчасно';
        break;
      case 'GC':
        statusUa = 'Посадка закінчена';
        break;
      case 'DL':
        statusUa = 'Затримується';
        break;
      case 'CK':
        statusUa = 'Реєстрація';
        break;
      default:
        statusUa = flight.status;
    }

    const { name, logoSmallName } = flight.airline.ru;

    return {
      ID: flight.ID,
      airportName: flight['airportToID.city_ru'] || flight['airportFromID.city'],
      name,
      term: flight.term,
      logoSmallName,
      flightNumber: flight.codeShareData[0].codeShare,
      localTime,
      timeStatus,
      statusUa,
    };
  });

  return q ? result.filter(flightElem => flightElem.flightNumber.includes(q)) : result;
};

export default prepareFlightsList;
