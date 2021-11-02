import React from 'react';
import { GiAirplaneArrival, GiAirplaneDeparture } from 'react-icons/gi';

const Switches = ({ isDepartureActive, handleDepartureChange, handleArrivalChange }) => (
  <section className="switches">
    <a
      href="/departures"
      className={`switches__link ${isDepartureActive ? 'active' : ''}`}
      onClick={handleDepartureChange}
    >
      <GiAirplaneDeparture /> Виліт
    </a>
    <a
      href="/arrivals"
      className={`switches__link ${!isDepartureActive ? 'active' : ''}`}
      onClick={handleArrivalChange}
    >
      <GiAirplaneArrival />
      Приліт
    </a>
  </section>
);

export default Switches;
