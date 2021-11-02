import React from 'react';
import { connect } from 'react-redux';
import { useParams } from 'react-router-dom';
import TableItem from './TableItem';
import { flightsListSelector } from '../flight.selectors';
import { getFlightsList } from '../flight.actions';

const Table = ({ flightsList, getFlights }) => {
  const ff = useParams();
  console.log(ff);

  React.useEffect(() => getFlights(), []);

  const flightsListToRender = flightsList.departure.slice();

  const isDeparture = true; // fix this

  console.log(flightsList);
  flightsListToRender.sort((a, b) => a.timeDepShedule - b.timeDepShedule);
  return (
    <section className="flights-table">
      <table>
        <thead>
          <tr>
            <td>Термінал</td>
            <td>Розклад</td>
            {isDeparture ? <td>Напрямок</td> : <td>Прилітає з</td>}
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

const mapState = state => ({
  flightsList: flightsListSelector(state),
});

const mapDispatch = {
  getFlights: getFlightsList,
};

export default connect(mapState, mapDispatch)(Table);
