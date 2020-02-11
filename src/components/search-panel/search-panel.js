import React, { Component } from 'react';
import ItemStatusFilter from '../item-status-filter/';
import './search-panel.css';

export default class SearchPanel extends Component {
    state = {
        term: ''
    };

    onSearchChange = (e) => {
        const term = e.target.value;
        this.setState( {term} );
        this.props.onSearchChange(term);
    };

    render() {
        return (
            <div className='d-flex justify-content-between mb-2'>
                <input 
                    placeholder='Serch something' 
                    className="form-control search-input mr-1"
                    value={this.state.term}
                    onChange={this.onSearchChange}
                />
                <ItemStatusFilter 
                    filter={this.props.filter}
                    onFilterChange={this.props.onFilterChange}
                />
            </div>
        );
    };
};