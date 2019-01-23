//@flow
import React, { Component } from 'react'
import styles from './style';
import { withStyles } from '@material-ui/styles';
import { Grid, TextField } from '@material-ui/core';


type Props = {
    idField : string;
    nameField : string;
    contentField : string;
    dueField: string;
    onChange(e: any) : void;
    classes : any;
}

class AddForm extends Component<Props> {
    render () {
        const { idField, nameField, contentField, dueField , onChange, classes} = this.props;
        return (
            <Grid container direction='column' justify='center' alignItems='center'>
                <TextField
                    fullWidth
                    value={idField}
                    id="id-textField"
                    label="Todo ID"
                    name='id'
                    onChange={onChange}
                    className={classes.textField}
                    margin="normal"
                />
                <TextField
                    fullWidth
                    value={nameField}
                    id="name-textField"
                    label="Todo Name"
                    name='name'
                    onChange={onChange}
                    className={classes.textField}
                    margin="normal"
                />
                <TextField
                    fullWidth
                    value={contentField}
                    id="content-textField"
                    label="Content"
                    name='content'
                    onChange={onChange}
                    className={classes.textField}
                    margin="normal"
                />
                <TextField
                    
                    fullWidth
                    value={dueField}
                    id="due-textField"
                    label="due"
                    name='due'
                    onChange={onChange}
                    className={classes.textField}
                    margin="normal"
                />
            </Grid>
        )
    }
}

export default withStyles(styles)(AddForm);