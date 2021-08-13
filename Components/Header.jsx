import { useRef, useEffect, useState } from "react";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import headerStyles from "../CSS/header.module.css";
import { useRouter } from "next/router";

function Header() {
  let [search_category, setSearch_category] = useState("Movies");
  let [searchQuery, setSearchQuery] = useState("");
  let dropDownList = useRef();
  let dropDownBtn = useRef();

  let router = useRouter();

  function toggleDropDown() {
    dropDownList.current.classList.toggle(`${headerStyles.dropDownClicked}`);
  }

  function setCategory(e) {
    let category = e.target.innerHTML;
    dropDownBtn.current.innerHTML = category;
    setSearch_category(category);
  }

  function submit(e) {
    e.preventDefault();
    if (searchQuery !== "") {
      router.push(`/${search_category}/${searchQuery}`);
    }
  }

  function search(e) {
    setSearchQuery(e.target.value);
  }

  useEffect(() => {
    //prevents adding all values when dragged

    let list = dropDownList.current.childNodes;
    for (let i = 0; i < list.length; i++) {
      list[i].addEventListener("click", setCategory);
    }
  }, []);

  return (
    <header className={headerStyles.header}>
      <form onSubmit={submit} className={headerStyles.searchContainer}>
        <input
          value={searchQuery}
          onChange={search}
          type="text"
          className={headerStyles.search}
          placeholder="Search"
        ></input>
        <div
          onClick={toggleDropDown}
          className={headerStyles.dropDownContainer}
        >
          <button type="button" className={headerStyles.dropDownBtn}>
            <span ref={dropDownBtn}>Movies</span>
            <ArrowDropDownIcon />
          </button>
          <ul ref={dropDownList} className={headerStyles.dropDownList}>
            <li>Movies</li>
            <li>TV Shows</li>
            <li>People</li>
          </ul>
        </div>
      </form>

      <h1
        onClick={() => {
          router.push("/");
        }}
        className={headerStyles.title}
      >
        Movie Mania
      </h1>
    </header>
  );
}

export default Header;
