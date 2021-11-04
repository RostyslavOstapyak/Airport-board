import React from 'react';
import { ImSearch } from 'react-icons/im';
import History from '../../history';

const Search = ({ flightType }) => {
  const [searchInputValue, setSearchInputValue] = React.useState('');

  const handleChange = e => setSearchInputValue(e.target.value);

  const handleSubmit = e => {
    e.preventDefault();
    History.push(`/${flightType}?q=${searchInputValue}`);
    setSearchInputValue('');
  };

  const btnRef = React.createRef();
  const handleKeyPress = event => {
    if (event.keyCode === 13) {
      btnRef.click();
    }
  };

  return (
    <div className="search-form__container">
      <h1 className="title">Пошук рейсу</h1>

      <form className="search-form" onSubmit={handleSubmit}>
        <ImSearch />
        <input
          onChange={handleChange}
          value={searchInputValue}
          type="text"
          className="search-form__input"
          placeholder="Номер рейсу або місто"
          onKeyPress={handleKeyPress}
        />
        <button className="search-form__btn" type="submit" ref={btnRef}>
          Знайти
        </button>
      </form>
    </div>
  );
};

export default Search;
