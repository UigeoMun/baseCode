import React, { Component,Fragment } from 'react'
import { type State } from '../../store';
import { connect } from 'react-redux';
import { compose } from 'redux';
import UserButton from '../../components/common/UserButton';
import UserMenuContainer from './UserMenuContainer';
import Avatar from '@material-ui/core/Avatar';
import Grid from '@material-ui/core/Grid';
import {type CurrentUser} from '../../store/modules/user';
import { BaseActions } from '../../store/actionCreators'


type Props = {
    user : CurrentUser;
}

class ProfileContainer extends Component<Props> {

    handleClick= () => {
        BaseActions.showUserMenu();
    }

    render () {
        return (
            <Grid  container justify="center" alignItems="center">
                <Avatar id='avatar' onClick={this.handleClick} />
                <UserMenuContainer />
            </Grid>
        )
    }
}

export default compose(
    connect( 
        ( { user } : State)=>({
            user : user
        }),
        () => ({})
    )
)(ProfileContainer);