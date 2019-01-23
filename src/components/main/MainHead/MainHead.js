//@flow
import React, {Fragment, type Node} from 'react';
import Button from '@material-ui/core/Button';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import {withStyles} from '@material-ui/styles';
import styles from './style';

type Props = {
    toLoginPage : Function;
    profile : ? Node;
    login : boolean;
    classes : any;
}


const MainHead = ( {toLoginPage, profile, login, classes} : Props) => {
    const loginButton = (<Button color='inherit' onClick={toLoginPage}> Login </Button>);
    
    return (
        <AppBar position='fixed' className={classes.appBar}>
            <Toolbar>
                <Typography variant='h6' color='inherit'>
                    Todo
                </Typography>
                { login ? profile : loginButton }
            </Toolbar>
        </AppBar>
    )
}

export default withStyles(styles)(MainHead);
