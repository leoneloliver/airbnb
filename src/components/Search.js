import React from 'react';
import { BiSearch } from "react-icons/bi";

const Search = (props) => {
  return(
    <React.Fragment>
        <div className="search-container">
            <input 
                id="myInput" 
                type="text" 
                className="searchbar searchbox shadow" 
                placeholder="Where are you going?" 
                onChange={props.searchFunc} 
                onFocus={props.searchFunc} 
                autoFocus={true}
                autoComplete="off"
            />
           <span className="search-icon">
             <BiSearch />
           </span>
        </div>
    </React.Fragment>
    
  )
}

export default Search