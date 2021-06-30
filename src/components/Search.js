import React from 'react';
import { BiSearch } from "react-icons/bi";

const Search = (props) => {


  function afterSearch(e) {
    document.getElementById('myInput').addEventListener("keypress", function(){
      if(e.keyCode === 13){
        e.preventDefault(); // Ensure it is only this code that runs
        const elmnt = document.getElementById("divisor");
        elmnt.scrollIntoView();
      }
    });
  }


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
                onKeyDown={afterSearch}
            />
           <span className="search-icon">
             <BiSearch />
           </span>
        </div>
    </React.Fragment>
    
  )
}

export default Search