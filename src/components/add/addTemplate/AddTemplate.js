//@flow
import React, {type Node} from 'react';
import { Grid } from '@material-ui/core';
import styles from './style';
import { withStyles } from '@material-ui/styles';

type Props = {
    addForm : Node,
    classes : any
}

const AddTemplate = ({addForm, classes} : Props) => (
    <Grid container className={classes.addTemplate} justify='center' alignItems='center' >
        {addForm}
    </Grid>
)

export default withStyles(styles)(AddTemplate);