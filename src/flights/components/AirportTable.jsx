import React from 'react';
import { GiAirplaneArrival, GiAirplaneDeparture } from 'react-icons/gi';
import { BrowserRouter, NavLink, Switch, Route } from 'react-router-dom';
import Search from './Search.jsx';
import Table from './Table.jsx';

const AirportTAble = () => (
  <BrowserRouter>
    <div className="wrapper">
      <Search />
      <section className="switches">
        <NavLink to="/departures" className="switches__link" activeClassName="active">
          <GiAirplaneDeparture /> Виліт
        </NavLink>
        <NavLink
          to="/arrivals"
          href="/arrivals"
          className="switches__link"
          activeClassName="active"
        >
          <GiAirplaneArrival />
          Приліт
        </NavLink>
      </section>
      <Switch>
        <Route exact path="/" component={Table} />
        <Route path="/arrivals" component={Table} />
        <Route path="/departures" component={Table} />
      </Switch>
    </div>
  </BrowserRouter>
);

export default AirportTAble;
