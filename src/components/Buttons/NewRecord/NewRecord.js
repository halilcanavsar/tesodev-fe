import './NewRecord.scss';
import { NavLink } from 'react-router-dom';

const AddNewRecord = () => {
  return (
    <div className="add-new-record">
      <NavLink to={'/add-link'}>
        <button
          className="add-new-record-button"
          onClick={() => {
            console.log('clicked');
          }}
        >
          Add new record
        </button>
      </NavLink>
    </div>
  );
};

export default AddNewRecord;
