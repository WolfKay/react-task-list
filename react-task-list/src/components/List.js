import React, { Component } from "react";

import Task from './Task.js';
import PropTypes from "prop-types";

import "./List.css"
// import classNames from "classnames";

class List extends Component {
    state = {
        showTask: [0, 1]
    }

        // I am testing this part, essentially I would use a method like a splice
    handleClick = taskId => {
        this.setState({
            showTask: taskId
          });
    }

    render() {
        return (
            <div className={`list`}>
                {this.props.data.map((d, index) => (
                    <Task
                        key={d.className}
                        className={d.className}
                        date={d.date}
                        toDo={d.toDo}
                        x={d.x}
                        taskId={index}
                        // includes is failing, if a i change it to a conditional it works
                        isListed={this.state.showTask.includes(this.props.taskId)}
                        removeTask={this.handleClick}
                    />
                ))}
            </div>
        );
    }
}
List.propTypes = {
    data: PropTypes.array.isRequired
}

export default List;