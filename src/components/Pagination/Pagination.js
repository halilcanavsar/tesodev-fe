import './Pagination.scss';
import { useEffect, useState } from 'react';
const Pagination = ({ postsPerPage, totalPosts, paginate, currentPage }) => {
  const [numberP, setNumberP] = useState(1);

  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }

  const previousPage = () => {
    if (numberP > 1) {
      paginate(numberP - 1);
      setNumberP(numberP - 1);
    }
  };

  const nextPage = () => {
    if (numberP < pageNumbers.length) {
      paginate(numberP + 1);
      setNumberP(numberP + 1);
    }
  };

  return (
    <nav>
      <ul className="pagination">
        <li className="page-item">
          <button className="page-link" onClick={previousPage}>
            Previous
          </button>
        </li>

        {pageNumbers.map((number) => (
          <li key={number} className="page-item">
            <button
              className={
                numberP === number
                  ? `pagination-link-active `
                  : `pagination-link pagination-${number}`
              }
              onClick={() => {
                setNumberP(number);
                paginate(number);
              }}
            >
              {number}
            </button>
          </li>
        ))}
        <li className="page-item">
          <button className="page-link" onClick={nextPage}>
            Next
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default Pagination;
