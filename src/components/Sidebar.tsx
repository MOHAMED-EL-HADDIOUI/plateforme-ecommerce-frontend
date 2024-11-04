import React from 'react';

function Sidebar() {
    return (
        <div className="sidebar">
            <h3>Filters</h3>
            <div className="filter-section">
                <h4>Price Range</h4>
                <input type="range" min="0" max="1000" step="10" />
                <div className="price-range">
                    <span>$0</span>
                    <span>$1000</span>
                </div>
            </div>
            <div className="filter-section">
                <h4>Categories</h4>
                <div className="checkbox-group">
                    <label>
                        <input type="checkbox" /> Electronics
                    </label>
                    <label>
                        <input type="checkbox" /> Fashion
                    </label>
                    <label>
                        <input type="checkbox" /> Home & Kitchen
                    </label>
                </div>
            </div>
            <div className="filter-section">
                <h4>Ratings</h4>
                <div className="ratings">
                    <span>⭐⭐⭐⭐⭐</span>
                    <span>⭐⭐⭐⭐</span>
                    <span>⭐⭐⭐</span>
                </div>
            </div>
        </div>
    );
}

export default Sidebar;
