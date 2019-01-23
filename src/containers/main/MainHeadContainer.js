//@flow
import React, { Component, Fragment } from 'react';
import MainHead from '../../components/main/MainHead';
import { type CurrentUser  } from '../../lib/data/user';
import { UserActions } from '../../store/actionCreators';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { type State } from '../../store/index';
import { withRouter } from 'react-router';
import {type History} from 'history';
import ProfileContainer from '../profile/ProfileContainer';


type Props = {
    user : ?CurrentUser;
    history : History;
}

class MainHeadConatiner extends Component<Props> {

    handleClickLogin = () => {
        this.props.history.push('/login');
    }

    render() {
        return (
            <MainHead 
                toLoginPage={this.handleClickLogin} 
                login={false}
                profile= { this.props.user && <ProfileContainer/> }
            />
        );
    }
}

export default compose(
    withRouter,
    connect(
        ( {  user } : State ) => ({
            user : user
        }),
        () => ({})
    ),
)(MainHeadConatiner);