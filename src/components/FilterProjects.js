import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { setFilter } from '../state/actions/filter';

function FilterProjects() {
    const [showFilter, setShowFilter] = useState(false);
    const [categories, setCategories] = useState([]);
    const dispatch = useDispatch();

    useEffect(() => {
        setCategories([
            'Most Recent',  // <span style="color: #666666">&#8226; default</span>
            'Least Recent',
            'Alphabetical',
            'Reverse Alphabetical',
            'Status: Completed',
            'Status: In Progress',
            'Status: Backlog'
        ]);
    }, []);

    const toggleFilter = () => {
        setShowFilter((prev) => !prev);
    };

    const handleClick = (e) => {
        setShowFilter(false);
        dispatch(setFilter(e.target.value));
    };

    return (
        <div>
            <button onClick={toggleFilter}>Display By <span>&#x25BC;</span></button>
            {showFilter && (
                <div>
                    {categories.map((category) => (
                        <button
                            key={Math.random()}
                            onClick={handleClick}
                            value={category}
                        >
                            {category}
                        </button>
                    ))}
                </div>
            )}
        </div>
    );
}

export default FilterProjects;