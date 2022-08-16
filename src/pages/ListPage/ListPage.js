import './ListPage.scss';
import { useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Data from '../../data.json';
import AddNewRecord from '../../components/Buttons/NewRecord/NewRecord';

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

const ListPage = () => {
  const location = useLocation();
  const { text } = location.state;
  const [searchText, setSearchText] = useState(text);

  const [data, setData] = useState(normalizeData(Data.data));
  const [filteredData, setFilteredData] = useState(normalizeData(Data.data));
  const [sortState, setSortState] = useState('nameAscending');

  useEffect(() => {
    setFilteredData(
      data.filter((el) => {
        return Object.keys(el).some((key) => {
          return el[key]
            .toString()
            .toLowerCase()
            .includes(searchText.toLowerCase());
        });
      })
    );
  }, [searchText]);

  const nameAscending = () => {
    const sortedData = filteredData.sort((a, b) =>
      a['Name Surname'].localeCompare(b['Name Surname'])
    );
    setFilteredData([...sortedData]);
  };

  const nameDescending = () => {
    const sortedData = filteredData.sort((a, b) =>
      b['Name Surname'].localeCompare(a['Name Surname'])
    );
    setFilteredData([...sortedData]);
  };

  //sort by date ascending dd/mm/yyyy
  const yearAscending = () => {
    const sortedData = filteredData.sort(
      (a, b) =>
        new Date(a.Date.split('/').reverse().join()).getTime() -
        new Date(b.Date.split('/').reverse().join()).getTime()
    );
    setFilteredData([...sortedData]);
  };
  //sort by date descending
  const yearDescending = () => {
    const sortedData = filteredData.sort(
      (a, b) =>
        new Date(b.Date.split('/').reverse().join()).getTime() -
        new Date(a.Date.split('/').reverse().join()).getTime()
    );
    setFilteredData([...sortedData]);
  };

  const sortBy = (sortState) => {
    switch (sortState) {
      case 'nameAscending':
        nameAscending();
        break;
      case 'nameDescending':
        nameDescending();
        break;
      case 'yearAscending':
        yearAscending();
        break;
      case 'yearDescending':
        yearDescending();
        break;
      default:
        break;
    }
  };

  useEffect(() => {
    sortBy(sortState);
  }, [sortState]);

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
            onChange={(e) => {
              setSearchText(e.target.value);
              sortBy(sortState);
            }}
          />

          <button type="submit" className="search-bar-btn">
            Search
          </button>
        </form>

        <div className="search-bar-results landing-results">
          <div className="se">
            {filteredData.slice(0, 5).map((el, index) => {
              return (
                <div className="search-bar-result" key={index}>
                  <div className="search-bar-result-icon">
                    <img
                      src={require('../../assets/images/location.png')}
                      alt="avatar"
                    />
                  </div>
                  <div className="search-bar-result-text">
                    <div className="search-bar-result-name-date">
                      <p className="search-bar-result-text-name">
                        {el['Name Surname']}
                      </p>
                      <p className="search-bar-result-text-date">{el.Date}</p>
                    </div>

                    <p className="search-bar-result-text-country">
                      {el.Country}, {el.City}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <div className="list-new-record">
        <div>
          <AddNewRecord />
        </div>
        <div>
          {/* <button onClick={nameAscending}>Name Ascending</button>
          <button onClick={nameDescending}>Name Descending</button>
          <button onClick={yearAscending}>Year Ascending</button>
          <button onClick={yearDescending}>Year Descending</button> */}

          {/* create a select tag with ascending and descending functions*/}
          <select
            onChange={(e) => {
              setSortState(e.target.value);
            }}
          >
            <option value="nameAscending">Name Ascending</option>
            <option value="nameDescending">Name Descending</option>
            <option value="yearAscending">Year Ascending</option>
            <option value="yearDescending">Year Descending</option>
          </select>
          {/* <select
            onChange={(e) => {
              if (e.target.value === 'nameAscending') {
                nameAscending();
              } else if (e.target.value === 'nameDescending') {
                nameDescending();
              } else if (e.target.value === 'yearAscending') {
                yearAscending();
              } else if (e.target.value === 'yearDescending') {
                yearDescending();
              }
            }}
          >
            <option value="nameAscending">Name Ascending</option>
            <option value="nameDescending">Name Descending</option>
            <option value="yearAscending">Year Ascending</option>
            <option value="yearDescending">Year Descending</option>
          </select> */}
        </div>
      </div>
    </div>
  );
};

export default ListPage;
