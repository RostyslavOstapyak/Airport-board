import React from 'react';
import TableItem from './TableItem';

const Table = ({ flightsList }) => {
  console.log(flightsList);
  return (
    <section className="flights-table">
      <table>
        <thead>
          <tr>
            <td>Термінал</td>
            <td>Розклад</td>
            <td>Напрямок</td>
            <td>Статус</td>
            <td>Авіакомпанія</td>
            <td>Рейс</td>
          </tr>
        </thead>
        <tbody>
          {flightsList.map(flight => (
            <TableItem key={flight.ID} {...flight} />
          ))}
        </tbody>
      </table>
    </section>
  );
};

export default Table;
