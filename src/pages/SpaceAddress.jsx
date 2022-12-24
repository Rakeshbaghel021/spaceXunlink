import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { PostHistory } from "../redux/action/action";
import { Pagination } from "antd";
import "../styles/spacehistory.css";
import AddressCard from "../components/AddressCard";
import { Link } from "react-router-dom";
import { Audio } from "react-loader-spinner";
const pageSize = 8;

const SpaceAddress = () => {
  const [searchTerm, setSearchTerm] = useState([]);
  const { posts, isLoading } = useSelector((state) => state);
  console.log(posts);
  const [info, setInfo] = useState({
    term: [],
    totalPage: 0,
    current: 1,
    minIndex: 0,
    maxIndex: 0,
  });
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(PostHistory(setInfo, pageSize));
  }, [dispatch]);

  const handleChange = (page) => {
    setInfo({
      ...info,
      current: page,
      minIndex: (page - 1) * pageSize,
      maxIndex: page * pageSize,
    });
  };
  const { term, current, minIndex, maxIndex } = info;

  const handleFilter = (e) => {
    const filterPost = posts.filter((value) => {
      return value.payload_id.toLowerCase().includes(searchTerm.toLowerCase());
    });
    setInfo({ ...info, term: filterPost });
  };
  return (
    <div className="main-wrapper">
      <Link to="/">
        <img
          style={{
            display: "flex",
            position: "relative",
            top: "1rem",
          }}
          src="https://ahmadhassan7.github.io/SpaceX/img/logo.svg"
          alt="Logo"
          className="logo"
        />
      </Link>

      <div>
        <input
          className="input-search"
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="search here"
        />
        <button className="btn" onClick={handleFilter}>
          Search
        </button>
      </div>

      {isLoading ? (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Audio
            height="80"
            width="80"
            radius="9"
            color="green"
            ariaLabel="loading"
            wrapperStyle
            wrapperClass
          />
        </div>
      ) : (
        <div className="card-container">
          {term?.map(
            (item, i) =>
              i >= minIndex &&
              i < maxIndex && <AddressCard item={item} key={i} />
          )}
        </div>
      )}
      <div
        style={{
          backgroundColor: "white",
          padding: "0 1rem",
          width: "50%",
          display: "flex",
          margin: "15px auto",
        }}
      >
        <Pagination
          pageSize={pageSize}
          current={current}
          total={term.length}
          onChange={handleChange}
        />
      </div>
    </div>
  );
};

export default SpaceAddress;
