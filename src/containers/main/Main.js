//@flow
import React, {Component} from 'react';
import MainTemplate from '../../components/main/MainTemplate';
import { connect } from 'react-redux';
import  { type State } from "../../store";
import * as Pages from "../../pages";
import { Switch, Route, withRouter, type ContextRouter } from 'react-router-dom';
import { compose } from 'redux';
import MainSidebarContainer from './MainSidebarContainer';
import MainHeadContainer from './MainHeadContainer';
import {type Todo} from 'lib/data/todo';


type Props = {

}

class MainContainer extends Component<Props> {  

    render() {
        return (
            <MainTemplate sidebar={ <MainSidebarContainer/> }>
                <MainHeadContainer/>
                <Switch>
                    <Route exact path='/(|add)' component={Pages.TodoAdd} />
                    <Route path='/detail/:id' component={Pages.TodoDetail} />
                    <Route path='/edit/:id' component={Pages.TodoEdit} />
                </Switch>
            </MainTemplate>
        );
    }
}

export default compose(
    withRouter,
    // connect(
    //     ( state : State ) => ({
    //         todos : state.todoList.todos
    //     }),
    //     () => ({})
    // ),
)(MainContainer);