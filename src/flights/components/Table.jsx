import React from 'react';
import { connect } from 'react-redux';
import { useParams, useLocation } from 'react-router-dom';
import TableItem from './TableItem';
import { flightsListSelector } from '../flight.selectors';
import { getFlightsList } from '../flight.actions';
import prepareFlightsList from '../prepareData';

const Table = ({ flightsList, getFlights }) => {
  const { flightType } = useParams();

  console.log(flightType);

  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const search = params.get('search');

  const [flightsListToRender, setFlightsListToRender] = React.useState([]);

  const isDeparture = flightType === 'arrivals';

  React.useEffect(() => {
    getFlights();
  }, [search]);

  React.useEffect(() => {
    setFlightsListToRender(prepareFlightsList(flightsList, isDeparture, search));
  }, [search, flightsList, isDeparture]);

  if (flightsListToRender.length <= 0) {
    return <span className="noting-found">Немає рейсів</span>;
  }

  return (
    <section className="flights-table">
      <table>
        <thead>
          <tr>
            <td>Термінал</td>
            <td>Розклад</td>
            {isDeparture ? <td>Прилітає з</td> : <td>Напрямок</td>}
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
