import React from "react";
import { useSearch } from "../../context/search";
import axios from "axios";
import { useNavigate } from "react-router-dom";
const SearchInput = () => {
  const [values, setValues] = useSearch();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.get(
        `/api/v1/product/search/${values.keyword}`
      );
      setValues({ ...values, results: data });
      navigate("/search");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      <form
        className="d-flex search-form"
        role="search"
        onSubmit={handleSubmit}
      >
        <input
          className="form-control "
          style={{ borderRadius: "50px 0 0 50px" }}
          type="search"
          placeholder="Search"
          aria-label="Search"
          value={values.keyword}
          onChange={(e) => setValues({ ...values, keyword: e.target.value })}
        />
        <button
          className="btn Searchbar-header"
          style={{
            borderRadius: "0 20px  20px  0px",
            backgroundColor: "#E79737"
          }}
          type="submit"
        >
          <i class="fa-solid fa-magnifying-glass" style={{ color: "#fff" }}></i>
        </button>
      </form>
    </div>
  );
};

export default SearchInput;
