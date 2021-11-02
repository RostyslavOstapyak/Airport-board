import React from 'react';
import { ImSearch } from 'react-icons/im';

const Search = () => {
  const [searchValue, setSearchValue] = React.useState('');

  const handleChange = e => setSearchValue(e.target.value);

  return (
    <div className="search-form__container">
      <h1 className="title">Пошук рейсу</h1>

      <form className="search-form">
        <ImSearch />
        <input
          onChange={handleChange}
          value={searchValue}
          type="text"
          className="search-form__input"
          placeholder="Номер рейсу або місто"
        />
        <button className="search-form__btn" type="submit">
          Знайти
        </button>
      </form>
    </div>
  );
};

export default Search;
