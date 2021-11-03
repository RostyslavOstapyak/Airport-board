import React from 'react';
import moment from 'moment';

const TableItem = flightInfo => {
  const { timeDepShedule, timeTakeofFact, term, status } = flightInfo;

  const airportName = flightInfo['airportToID.city_ru'] || flightInfo['airportFromID.city'];
  const { name, logoSmallName } = flightInfo.airline.ru;

  const flightNumber = `${flightInfo['carrierID.IATA']}${flightInfo.fltNo}`;

  let terminalColor;
  switch (term) {
    case 'A':
      terminalColor = 'green';
      break;
    case 'B':
      terminalColor = 'purple';
      break;
    case 'C':
      terminalColor = 'aqua';
      break;
    case 'D':
      terminalColor = '#1eb7ee';
      break;
    default:
      terminalColor = 'lightcoral';
      break;
  }

  const localTime = moment(timeDepShedule).format('HH:mm');
  const timeStatus = moment(timeTakeofFact).format('HH:mm');

  let statusUa;

  switch (status) {
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
      statusUa = status;
  }

  return (
    <tr>
      <td>
        <span style={{ color: terminalColor, borderColor: terminalColor }}>{term}</span>
      </td>
      <td>
        <span>{localTime}</span>
      </td>
      <td>
        <span>{airportName}</span>
      </td>
      <td>
        <span>{statusUa}</span>
      </td>
      <td>
        <div className="company-name">
          <img className="company-logo" src={logoSmallName} alt={name} />
          <span>{name}</span>
        </div>
      </td>
      <td>
        <span>{flightNumber}</span>
      </td>
    </tr>
  );
};

export default TableItem;
