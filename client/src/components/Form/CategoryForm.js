import React from 'react';
import '../../styles/CategoryForm.css';

const CategoryForm = ({ handleSubmit, value, setValue }) => {
  return (
    <>
      <form onSubmit={handleSubmit} className="input-new_cat-Add">
        <div className=" mb-3">
          <input
            style={{
              backgroundColor: 'white',
              color: 'black',
              border: '1px solid black',
            }}
            type="text"
            className="form-control"
            placeholder="Enter new category"
            value={value}
            onChange={(e) => setValue(e.target.value)}
          />
        </div>

        <button type="submit" className="SubmitBtn-catgory btn ">
          Submit
        </button>
      </form>
    </>
  );
};

export default CategoryForm;
