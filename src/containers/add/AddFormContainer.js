

import React, { Component } from 'react'
import { Grid } from '@material-ui/core';
import { type Todo } from '../../lib/data/todo';
import AddForm from '../../components/add/addForm';



class AddFormContainer extends Component {

    state : Todo = {
        id : "",
        name : "",
        content : "",
        due : "",
        done : false
    }

    handleChange = (e: any) => {
        console.log('wokrd');
        this.setState({
          [e.target.name]: e.target.value,
        });
    };

    handleAddClick = (todo : Todo) => {

    }

    render () {
        const { id, name, content, due, handleChange }= this.state;
        return (
            <Grid item>
                <AddForm
                    idField={id}
                    nameField={name}
                    contentField={content}
                    dueField={due}
                    onChange={handleChange}
                />
            </Grid>
        )
    }
}

export default AddFormContainer;