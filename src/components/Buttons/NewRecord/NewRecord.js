import './NewRecord.scss';

const AddNewRecord = () => {
  return (
    <button
      className="add-new-record-button"
      onClick={() => {
        console.log('clicked');
      }}
    >
      Add new record
    </button>
  );
};

export default AddNewRecord;
