import { useRef, useEffect, useState } from "react";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import headerStyles from "../CSS/header.module.css";
import { caller, endpoints } from "../endpoints";
import { useDispatch } from "react-redux";

function Header() {
  let [search_category, setSearch_category] = useState("");
  let dispatch = useDispatch();
  let dropDownList = useRef();
  let dropDownBtn = useRef();
  let searchBar = useRef();

  function toggleDropDown() {
    dropDownList.current.classList.toggle(`${headerStyles.dropDownClicked}`);
  }

  function setCategory(e) {
    let category = e.target.innerHTML;
    dropDownBtn.current.innerHTML = category;
    setSearch_category(category);
  }

  function search(e) {
    let searchQuery = e.target.value;
    if (e.keyCode === 13 && searchQuery !== "") {
      dispatch({
        type: "isSearched",
        payload: true,
      });

      switch (search_category) {
        case "Movies":
          caller.get(endpoints.searchMovie + searchQuery).then((res) => {
            dispatch({
              type: "setSearchRes",
              payload: res.data.results,
              isActor: false,
            });
          });
          break;
        case "TV Shows":
          caller.get(endpoints.searchTV + searchQuery).then((res) => {
            dispatch({
              type: "setSearchRes",
              payload: res.data.results,
              isActor: false,
            });
          });
          break;
        case "Actors":
          caller.get(endpoints.searchPeople + searchQuery).then((res) => {
            dispatch({
              type: "setSearchRes",
              payload: res.data.results,
              isActor: true,
            });
            console.log(res.data.results);
          });
          break;
        default:
          window.alert("something went wrong!");
      }
      searchBar.current.value = "";
    }
  }

  useEffect(() => {
    //prevents adding all values when dragged

    let list = dropDownList.current.childNodes;
    for (let i = 0; i < list.length; i++) {
      list[i].addEventListener("click", setCategory);
    }

    setSearch_category("Movies");
  }, []);

  return (
    <header className={headerStyles.header}>
      <div className={headerStyles.searchContainer}>
        <input
          ref={searchBar}
          onKeyDown={search}
          type="text"
          className={headerStyles.search}
          placeholder="Search"
        ></input>
        <div
          onClick={toggleDropDown}
          className={headerStyles.dropDownContainer}
        >
          <button className={headerStyles.dropDownBtn}>
            <span ref={dropDownBtn}>Movies</span>
            <ArrowDropDownIcon />
          </button>
          <ul ref={dropDownList} className={headerStyles.dropDownList}>
            <li>Movies</li>
            <li>TV Shows</li>
            <li>Actors</li>
          </ul>
        </div>
      </div>

      <h1
        onClick={() => {
          dispatch({ type: "isSearched", payload: false });
        }}
        className={headerStyles.title}
      >
        Movie Mania
      </h1>
    </header>
  );
}

export default Header;
