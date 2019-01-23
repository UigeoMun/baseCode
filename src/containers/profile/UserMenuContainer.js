//@flow

import React, {Component} from 'react';
import UserMenu from '../../components/common/UserMenu';
import { connect } from 'react-redux';
import { type State } from '../../store/index';
import { UserActions, BaseActions } from '../../store/actionCreators';


type Props = {
    userMenuOpen : boolean;
    userName: string;
    userid : string;
}


class UserMenuContainer extends Component<Props> {

    handleClickOutside = () => {
        BaseActions.hideUserMenu();
    }

    handleClick = () => {
        BaseActions.showUserMenu();
    }

    onLogout = async () => {
        const { userid } = this.props;
        try {
            await UserActions.logout(userid);
        } catch (err) {
            console.log(err);
        }
        window.location.href = '/';
    }

    render () {
        const { userMenuOpen, userName } = this.props;
        const { handleClick, handleClickOutside, onLogout } = this;
        return (
            <UserMenu 
                userName={userName}
                onClickOutside={handleClickOutside}
                open={userMenuOpen}
                anchorEl={document.getElementById('avatar')}
                onLogout={onLogout}
            />
        )
    }
}

export default connect(
    ( {base, user} : State ) => ({
        userMenuOpen : base.userMenu,
        userName : user.name,
        userid : user.id
    }),
    ()=>({})
)(UserMenuContainer);