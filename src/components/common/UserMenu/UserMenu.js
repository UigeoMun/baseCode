// @flow
import React, { Component } from 'react';
import UserMenuItem from '../UserMenuItem';
import './UserMenu.scss';
import { Menu, MenuItem } from '@material-ui/core';

type Props = {
    onClickOutside() : void;
    onLogout() : Promise<*>;
    userName : string;
    open : boolean;
    anchorEl : ?HTMLElement;
}

class UserMenu extends Component<Props> {

    render () {

        const { userName, onClickOutside , onLogout, anchorEl, open} = this.props;

        return (
            <Menu 
              id='user-menu'
              anchorEl={anchorEl}
              open ={open}
              onClose={onClickOutside}
            >
              <MenuItem >{userName}</MenuItem>
              <MenuItem onClick={onLogout} >Logout</MenuItem>
            </Menu>
        )
    }
}

export default UserMenu;