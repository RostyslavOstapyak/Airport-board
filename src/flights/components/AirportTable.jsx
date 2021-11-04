import React from 'react';
import { GiAirplaneArrival, GiAirplaneDeparture } from 'react-icons/gi';
import { Router, NavLink, Switch, Route, Redirect } from 'react-router-dom';
import Search from './Search.jsx';
import Table from './Table.jsx';
import History from '../../history';

const AirportTAble = () => {
  const [flightType, setFlightType] = React.useState('departures');

  const handleFlightTypeChange = e => {
    if (e.target.href) {
      return null;
    }
    const linkElem = e.target.closest('.switches__link');
    if (linkElem.href.includes('departures')) {
      setFlightType('departures');
    }
    setFlightType('arrivals');
    return undefined;
  };

  return (
    <Router history={History}>
      <div className="wrapper">
        <Search flightType={flightType} />

        <section className="switches">
          <NavLink
            to="/departures"
            href="/departures"
            className="switches__link"
            activeClassName="active"
            onClick={handleFlightTypeChange}
          >
            <GiAirplaneDeparture /> Виліт
          </NavLink>
          <NavLink
            to="/arrivals"
            href="/arrivals"
            className="switches__link"
            activeClassName="active"
            onClick={handleFlightTypeChange}
          >
            <GiAirplaneArrival />
            Приліт
          </NavLink>
        </section>
        <Switch>
          <Route path="/" exact>
            <Redirect to="/departures" />
          </Route>

          <Route path="/:flightType" component={Table} />
        </Switch>
      </div>
    </Router>
  );
};

export default AirportTAble;
