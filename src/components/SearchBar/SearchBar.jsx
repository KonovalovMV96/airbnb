import "./style.scss";
import searchIcon from './search.svg'
import Link from "../Link/Link";

function SearchBar() {
  return (
    <div className="searchbar">
      <div className="searchbar__btns-wrapper">
        
        <div className="searchbar__btn">
          <Link text='Anywhere'/>
        </div>

        <div className="searchbar__btn">
          <Link text='Any week'/>
        </div>

        <div className="searchbar__btn">
          <Link text='Add guests' style='light' />
        </div>
      </div>

      <button className="searchbar__btn-search">
        <img src={searchIcon} alt="Search Icon" />
      </button>
    </div>
  );
}

export default SearchBar;
