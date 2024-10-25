import SearchBar from "./SearchBar";
import FilterByRegion from "./FilterByRegion";

const NavBar = () => {
  return (
    <>
      <div className="search-filter-container">
        <SearchBar />
        <FilterByRegion />
      </div>
    </>
  );
};

export default NavBar;
