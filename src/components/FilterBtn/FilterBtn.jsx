import filterIcon from "./filters.svg";
import "./style.scss";

function FilterBtn() {
  return (
    <button className="filter-btn">
      <img src={filterIcon} alt="Filters" />
      Filters
    </button>
  );
}

export default FilterBtn;
