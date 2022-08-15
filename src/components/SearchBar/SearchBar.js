import { useState } from 'react';
import './SearchBar.scss';
import Data from '../../data.json';
import { NavLink } from 'react-router-dom';

const SearchBar = () => {
  const [text, setText] = useState('');

  const data = Data.data.filter((el) => {
    return Object.keys(el).some((key) => {
      return el[key].toString().toLowerCase().includes(text.toLowerCase());
    });
  });

  return (
    <div className="search-bar">
      <form>
        <input
          className="search-bar-input"
          type="text"
          placeholder="Search"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <NavLink
          to={{
            pathname: '/listpage',
          }}
          state={{ text: text }}
        >
          <button type="submit" className="search-bar-btn">
            Search
          </button>
        </NavLink>
      </form>

      {text.length > 2 && data.length > 0 ? (
        <div className="search-bar-results">
          {data.slice(0, 3).map((el) => {
            return (
              <div className="search-bar-result" key={el}>
                <div className="search-bar-result-icon">
                  <img
                    src={require('../../assets/images/location.png')}
                    alt="avatar"
                  />
                </div>
                <div className="search-bar-result-text">
                  <p className="search-bar-result-text-name">{el[0]}</p>
                  <p className="search-bar-result-text-country">
                    {el[4]}, {el[5]}
                  </p>
                </div>
              </div>
            );
          })}
          <NavLink
            to={{
              pathname: '/listpage',
            }}
            state={{ text: text }}
          >
            <button className="show-more-btn">Show more..</button>
          </NavLink>
        </div>
      ) : null}
    </div>
  );
};

export default SearchBar;
