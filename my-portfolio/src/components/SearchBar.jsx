import { useState } from "react";

import '../styles/SearchAndFilter.css'

const SearchBar = () => {
    const [searchValue, setSearchValue] = useState('')

    const findMatchingProjects = () => {

    }

    return (
        <div class="input-group mb-3 search-bar">
            <input type="text" class="form-control" placeholder="Search for a project"
                onChange={event => setSearchValue(event.target.value)}></input>
            <button class="btn btn-outline-secondary" type="button" id="findProject" onClick={findMatchingProjects}>&#128269;</button>
        </div>
    )
}

export default SearchBar