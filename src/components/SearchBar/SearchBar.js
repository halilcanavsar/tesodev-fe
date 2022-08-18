import { useState, useEffect } from 'react';
import './SearchBar.scss';
import Data from '../../data.json';
import { NavLink } from 'react-router-dom';

const normalizeData = () => {
  return Data.data.map((el) => {
    let object = {};
    for (let j = 0; j < el.length; j++) {
      object = {
        ...object,
        [Data.cols[j]]: el[j],
      };
    }

    return object;
  });
};

const SearchBar = () => {
  const [text, setText] = useState('');
  const [data, setData] = useState(normalizeData(Data.data));
  const [filteredData, setFilteredData] = useState(normalizeData(Data.data));

  useEffect(() => {
    setFilteredData(
      data.filter((el) => {
        return Object.keys(el).some((key) => {
          return el[key].toString().toLowerCase().includes(text.toLowerCase());
        });
      })
    );
  }, [text]);

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

      {text.length > 2 && filteredData.length > 0 ? (
        <div className="search-bar-results">
          {filteredData.slice(0, 3).map((el) => {
            return (
              <div className="search-bar-result" key={el}>
                <div className="search-bar-result-icon">
                  <img
                    src={require('../../assets/images/location.png')}
                    alt="avatar"
                  />
                </div>
                <div className="search-bar-result-text">
                  <p className="search-bar-result-text-name">
                    {el['Name Surname']}
                  </p>
                  <p className="search-bar-result-text-country">
                    {el.Country}, {el.City}
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
