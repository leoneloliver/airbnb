import React from 'react';
import { BiSearch } from "react-icons/bi";

const Search = (props) => {
  return(
    <React.Fragment>
        <div className="search-container">
            <input 
                id="myInput" 
                type="search" 
                className="searchbar searchbox shadow-sm" 
                placeholder="Search for houses..." 
                onChange={props.searchFunc} 
            />
           <span className="search-icon">
             <BiSearch />
           </span>
        </div>
    </React.Fragment>
    
  )
}

export default Search