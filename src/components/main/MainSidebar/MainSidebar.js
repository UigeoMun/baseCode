// @flow

import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import SideTodoItem from '../SideTodoItem';
import './MainSidebar.scss';
import {type Todo} from 'lib/data/todo';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import styles from './style';
import { withStyles } from '@material-ui/styles';
import { Grid } from '@material-ui/core';

type Props = {
    items : any[];
    classes : any;
}

class MainSidebar extends Component<Props> {
    


    static defaultProps = {
        items : []
    }

    initailize = () => {
        return this.props.items.map( todo => <SideTodoItem todo={todo} /> );
    }
    
    render() {
        const { classes, items } = this.props;
        console.log(items);
        return (
            <Drawer 
                variant='permanent' 
                anchor='left' 
                className={classes.drawer}
                classes={{
                    paper: classes.drawerPaper,
                }} >
                <Grid className={classes.title}>
                    <Link to="/" className="logo">  
                        <Typography variant='h6'> What Todo </Typography>
                    </Link>
                </Grid>
                
                <Divider/>
                <List>
                    { items && this.initailize()}
                </List>
            </Drawer>
            );
    }
}




export default withStyles(styles)(MainSidebar);