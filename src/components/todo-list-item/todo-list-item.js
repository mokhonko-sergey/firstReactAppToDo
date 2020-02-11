import React, { Component } from 'react';
import './todo-list-item.css';

export default class TodoListItem extends Component {

    render() {
        const { label,
                onDeleted,
                onToggleImportant,
                onToggleDone,
                important,
                done } = this.props;

        let classNames = 'todo-list-item d-flex justify-content-between align-items-center';
        if (done) {
            classNames += ' done';
        }

        if (important) {
            classNames += ' important';
        }

        return (
            <span className={classNames}>
                <span
                    className='list-item-label'
                    onClick={onToggleDone}
                >
                    {label}
                </span>

                <div>
                    <button type="button" className="btn btn-outline-danger mr-1"
                        onClick={onDeleted}
                    >
                        <i className="fas fa-trash-alt"></i>
                    </button>
                    <button type="button" className="btn btn-outline-success"
                        onClick={onToggleImportant}
                    >
                        <i className="fas fa-exclamation"></i>
                    </button>
                </div>
            </span>
        );
    }
}