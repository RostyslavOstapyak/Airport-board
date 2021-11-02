import React from 'react';
import { connect } from 'react-redux';
import Search from './Search.jsx';
import Switches from './Switches.jsx';
import Table from './Table.jsx';
import { flightsListSelector } from '../flight.selectors';
import { getFlightsList } from '../flight.actions';

const AirportTAble = ({ flightsList, getFlights }) => {
  React.useEffect(() => getFlights(), []);

  let flightsListToRender = flightsList.departure;

  const [isDepartureActive, setIsDepartureActive] = React.useState(true);

  const handleDepartureChange = e => {
    e.preventDefault();
    if (!isDepartureActive) {
      setIsDepartureActive(true);
    }
  };

  const handleArrivalChange = e => {
    e.preventDefault();
    if (isDepartureActive) {
      setIsDepartureActive(false);
    }
  };

  if (!isDepartureActive) {
    flightsListToRender = flightsList.arrival;
  }
  return (
    <div className="wrapper">
      <Search />
      <Switches
        isDepartureActive={isDepartureActive}
        handleDepartureChange={handleDepartureChange}
        handleArrivalChange={handleArrivalChange}
      />
      <Table flightsList={flightsListToRender} isDepartureActive={isDepartureActive} />
    </div>
  );
};

const mapState = state => ({
  flightsList: flightsListSelector(state),
});

const mapDispatch = {
  getFlights: getFlightsList,
};

export default connect(mapState, mapDispatch)(AirportTAble);
