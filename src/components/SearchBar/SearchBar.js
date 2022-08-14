import { useState, useContext } from 'react';
import userContext from '../../contexts/userContext';
import './SearchBar.scss';
import Data from '../../data.json';
import { NavLink } from 'react-router-dom';

const SearchBar = () => {
  const [text, setText] = useState('');

  const { searchUsers } = useContext(userContext);

  const data = Data.data.filter((el) => {
    return Object.keys(el).some((key) => {
      return el[key].toString().toLowerCase().includes(text.toLowerCase());
    });
  });

  // const showMore = () => {
  //   setSearchFilter(searchFilter);
  //   console.log(searchUsers);
  // };

  // const onChange = (e) => {
  //   console.log(data, 'data');
  //   e.preventDefault();
  //   searchUsers(text);
  // };

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
        <NavLink to="/listpage">
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
          <NavLink to="/listpage">
            <button className="show-more-btn">Show more..</button>
          </NavLink>
        </div>
      ) : null}
    </div>
  );
};

export default SearchBar;
