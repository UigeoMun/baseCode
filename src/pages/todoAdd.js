//@flow
import React, { Component } from 'react';
import AddTemplate from '../components/add/addTemplate';
import AddFormContainer from '../containers/add/AddFormContainer';
import { Grid } from '@material-ui/core';

type Props = {
    //...
}

class TodoAdd extends Component<Props> {
    render () {
        return (
                <AddTemplate
                addForm={<AddFormContainer/>}
                />
        )
    }
}

export default TodoAdd;