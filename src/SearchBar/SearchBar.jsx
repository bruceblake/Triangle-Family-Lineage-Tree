import {useState} from 'react'
import "./SearchBar.css"

function SearchBar(props) {

    return(
        <div className="wrap">
            <div className="search">
                <input type="text" className="searchTerm" placeholder="Search for a brother"/>
                <button type="submit" className="searchButton">
                    <i>Search!</i>
                </button>
            </div>
        </div>
    )

}


export default SearchBar


