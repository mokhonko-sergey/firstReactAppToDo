import React, { Component } from 'react';

export default class AddItem extends Component {

    state = {
        label: ''
    }

    onLabelChange = (event) => {
        this.setState({
            label: event.target.value.toUpperCase()
        });
    };

    onSubmit = (e) => {
        e.preventDefault();
        this.props.onItemAdded(this.state.label);
        this.setState({
            label: ''
        });
    };
    
    render() {

        return (
            <form className="d-flex my-2" onSubmit={this.onSubmit}>
                <input type='text'
                    className="form-control mr-1"
                    onChange={this.onLabelChange}
                    placeholder="What needs to be done"
                    value={this.state.label}
                />
                <button
                    className='btn btn-outline-primary'
                >
                    Add
                </button>
            </form>
        );
    };
};