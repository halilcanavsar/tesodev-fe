import './ListPage.scss';
import { useLocation } from 'react-router-dom';
import { useState } from 'react';
import Data from '../../data.json';
import AddNewRecord from '../../components/Buttons/NewRecord/NewRecord';

const ListPage = () => {
  const location = useLocation();
  const { text } = location.state;

  const [searchText, setSearchText] = useState(text);

  const data = Data.data.filter((el) => {
    return Object.keys(el).some((key) => {
      return el[key]
        .toString()
        .toLowerCase()
        .includes(searchText.toLowerCase());
    });
  });

  return (
    <div className="list-page">
      <img
        src={require('../../assets/images/header-logo.jpg')}
        alt=""
        className="logo"
      />

      <div className="search-bar landing-search-bar">
        <form>
          <input
            className="search-bar-input"
            type="text"
            placeholder="Search"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          />

          <button type="submit" className="search-bar-btn">
            Search
          </button>
        </form>

        <div className="search-bar-results landing-results">
          {data.slice(0, 5).map((el) => {
            return (
              <div className="search-bar-result" key={el}>
                <div className="search-bar-result-icon">
                  <img
                    src={require('../../assets/images/location.png')}
                    alt="avatar"
                  />
                </div>
                <div className="search-bar-result-text">
                  <div className="search-bar-result-name-date">
                    <p className="search-bar-result-text-name">{el[0]}</p>
                    <p className="search-bar-result-text-date">{el[3]}</p>
                  </div>

                  <p className="search-bar-result-text-country">
                    {el[4]}, {el[5]}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div>
        <AddNewRecord />
      </div>
    </div>
  );
};

export default ListPage;
