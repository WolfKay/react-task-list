import React, { Component } from 'react';

import PropTypes from "prop-types";

import './Task.css';

class Task extends Component {

    onClick = () => {
        this.props.removeTask(this.props.taskId);
    }

    render() {
        return (
        <div className ={`task ${this.props.className}
        ${!this.props.isListed ? "hidden" : ""}`}
        onClick={this.onClick}>
         <p>{this.props.x}</p>
         <p>{this.props.date}</p>
         <p>{this.props.toDo}</p> 
        </div>
        );
    }
}
Task.propTypes = {
    className: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    toDo: PropTypes.string.isRequired,
    x: PropTypes.string.isRequired
}
export default Task;