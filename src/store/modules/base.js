// @flow

import {createAction, handleActions, type ActionType} from 'redux-actions';
import produce from 'immer';

const SHOW_USER_MENU = 'base/SHOW_USER_MENU';
const HIDE_USER_MENU = 'base/HIDE_USER_MENU';

const showUserMenu = createAction(SHOW_USER_MENU);
const hideUserMenu = createAction(HIDE_USER_MENU);

type ShowUserMenuAction = ActionType<typeof showUserMenu>;
type HideUserMenuAction = ActionType<typeof hideUserMenu>;

export interface BaseActionCreators {
    showUserMenu() : any;
    hideUserMenu() : any;
}

export const actionCreators: BaseActionCreators = {
    showUserMenu,
    hideUserMenu
}

export type Base = {
    userMenu : boolean,
}

const initialState: Base = {
    userMenu : false
}

export default handleActions(
    {
        [SHOW_USER_MENU] : (state, action) =>
            produce(state, (draft) => {
                draft.userMenu = true;
            }),
        [HIDE_USER_MENU] : (state, action) => 
            produce(state, (draft) => {
                draft.userMenu = false;
            })
    },
    initialState
);