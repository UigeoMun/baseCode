//@flow
import React, { Component } from 'react';
import { TodoActions } from '../store/actionCreators';
import { connect } from 'react-redux';
import { type State } from '../store';
import { type Todo} from 'lib/data/todo';
import DetailCurrent from '../components/detail';
import {type History} from 'history';

type Props = {
    id: string;
    detail : Todo;
    history : History;
}

class TodoDetail extends Component<Props> {

    initialize = () => {
        const { id } = this.props;
        return TodoActions.getOneTodo(id);
    }

    componentDidCatch(){
        this.initialize();
    }

    componentDidUpdate(prevProps){
        if(prevProps !== this.props.id){
            this.props.history.push('/');
        }
    }

    componentWillUnmount() {
        TodoActions.getOneTodo(null);
    }

    render () {
        const { id, detail } = this.props;
        return (
            <DetailCurrent
                todo = {this.props.detail}
                todoDelete = {TodoActions.deleteTodo}
            />
        )
    }
}

export default connect(
    ({todo}: State) => ({
        detail : todo.detail
    }),
    () => ({})
)(TodoDetail);