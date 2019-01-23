// @flow
import configure from './configure';
import  { type CurrentUser } from 'lib/data/user';
import  { type TodoList } from 'lib/data/todo';
import { type Base } from './modules/base';

const store = configure(typeof window === 'undefined' ? undefined : window.__REDUX_STATE__);

export default store;

export type State = {
    base : Base;
    user : CurrentUser;
    todo : TodoList;
};