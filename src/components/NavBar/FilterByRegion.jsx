
import "./NavBar.css";



const FilterByRegion = () => {
  return (
    <select className="filter-by-region ">
      <option hidden> Filter By region</option>
      <option value="Asia"> Asia</option>
      <option value="Europe"> Europe</option>
      <option value="America"> America</option>
      <option value="Africa"> Africa</option>
      <option value="Oceania"> Oceania</option>
    </select>
  );
};

export default FilterByRegion;
