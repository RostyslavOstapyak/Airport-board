import React from 'react';
import moment from 'moment';

const TableItem = flightInfo => {
  const { timeDepShedule, timeTakeofFact, term, fltNo, status } = flightInfo;

  const airportName = flightInfo['airportToID.city_ru'];
  const { name, logoSmallName } = flightInfo.airline.ru;

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
      statusUa = 'Вилетів';
      break;
    case 'LN':
      statusUa = 'Прибув';
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
        <span>{`${statusUa} о ${timeStatus}`}</span>
      </td>
      <td>
        <div className="company-name">
          <img className="company-logo" src={logoSmallName} alt={name} />
          <span>{name}</span>
        </div>
      </td>
      <td>
        <span>{fltNo}</span>
      </td>
    </tr>
  );
};

export default TableItem;
