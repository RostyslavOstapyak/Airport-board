import React from 'react';

const TableItem = flightInfo => {
  const { term, flightNumber, name, logoSmallName, airportName, localTime, statusUa } = flightInfo;

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
