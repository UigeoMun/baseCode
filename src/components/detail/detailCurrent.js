//@flow

import React, { Component } from 'react';
import {type Todo} from 'lib/data/todo';

type Props = {
    todo : Todo;
    todoDelete : Function;
}

class DetailCurrent extends Component<Props> {

    handleDeleteClick = () => {
        const {todo, todoDelete} = this.props;
        todoDelete(todo.id);
 
    }

    render () {
        const {todo, todoDelete} = this.props;

        return (
            <div className='TagCurrent'>
                <h2> {todo.name} </h2>
                <hr/>
                <h6> id: {todo.id} due: {todo.due} </h6>
                <p> {todo.content} </p>
                <h3> {todo.done ? "Solved" : "Unsolved"} </h3>
                <button onClick={this.handleDeleteClick} > Delete </button>
            </div>
        )
    }
}

export default DetailCurrent;