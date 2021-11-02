import React from 'react';
import TableItem from './TableItem';

const Table = ({ flightsList, isDepartureActive }) => {
  console.log(flightsList);
  const flightsListToRender = flightsList
    .slice()
    .sort((a, b) => a.timeDepShedule - b.timeDepShedule);
  return (
    <section className="flights-table">
      <table>
        <thead>
          <tr>
            <td>Термінал</td>
            <td>Розклад</td>
            {isDepartureActive ? <td>Напрямок</td> : <td>Прилітає з</td>}
            <td>Статус</td>
            <td>Авіакомпанія</td>
            <td>Рейс</td>
          </tr>
        </thead>
        <tbody>
          {flightsListToRender.map(flight => (
            <TableItem key={flight.ID} {...flight} />
          ))}
        </tbody>
      </table>
    </section>
  );
};

export default Table;
