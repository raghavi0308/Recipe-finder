import React from 'react';

function FilterBar({ onFilter }) {
    return (
        <div>
            <button onClick={() => onFilter('breakfast')}>Breakfast</button>
            <button onClick={() => onFilter('lunch')}>Lunch</button>
            <button onClick={() => onFilter('dinner')}>Dinner</button>
        </div>
    );
}

export default FilterBar;
