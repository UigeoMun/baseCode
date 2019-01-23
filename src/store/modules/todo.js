//@flow
import { createAction, handleActions, type ActionType } from 'redux-actions';
import produce from 'immer';
import * as TodoApi from '../../lib/api/todos/index'
import { tokensToFunction } from 'path-to-regexp';
import { type Todo, type TodoList } from 'lib/data/todo';




// Action Types
const READ_TODO = 'todos/READ_TODO';
const GET_ONE_TODO = 'todos/GET_ONE_TODO';
const ADD_TODO = 'todos/ADD_TODO';
const UPDATE_TODO = 'todos/UPDATE_TODO';
const DELETE_TODO = 'todos/DELETE_TODO';


export interface TodoActionCreators {
    readTodo( limit : number, offset : number ) : any;
    getOneTodo( todoId : ?string ): any;
    addTodo( todo : Todo) : any;
    updateTodo( todo : Todo ) : any;
    deleteTodo( todoId : string ) : any;
}

const readTodo = ( limit : number , offset : number ) => (dispatch : any, getState: any) =>{
    //dispatch({ type : GET_TODO_PENDING });
    return TodoApi.retrieveTodos(limit, offset).then(
        todos => dispatch({type : READ_TODO , payload : todos})
    ).catch(
        //error => dispatch({type : READ_TODO_FAIL})
    );
}

const getOneTodo = ( todoId : ?string ) => (dispatch : any, getState: any) => {
    //dispatch({type : GET_ONE_TODO_PENDING});
    return TodoApi.getTodo( todoId ).then( 
        todo => dispatch({type :  GET_ONE_TODO, payload : todo})
     ).catch( 
         // error => dispatch({type : GET_ONE_TODO_FAIL})
      );
}

const addTodo = ( todo : Todo ) => (dispatch : any, getState: any) => {
    //dispatch({type : ADD_TODO_PENDING});
    return TodoApi.addTodo(todo).then(
        todos => dispatch({type : ADD_TODO, payload : todos})
    ).catch(
        // error => dispatch({type : ADD_TODO_FAIL});
    )
}

const updateTodo = (todo : Todo) => (dispatch : any, getState: any) => {
    //dispatch({type : UPDATE_TODO_PENDING});
    return TodoApi.updateTodo( todo ).then(
        todos => dispatch({ type : UPDATE_TODO, payload : todos })
    ).catch(
        //error => dispatch({type : UPDATE_TODO_FAIL})
    );
}

const deleteTodo = ( todoId : string ) => (dispatch : any, getState: any) => {
    // dispatch({type : DELETE_TODO_PENDING});
    return TodoApi.deleteTodo(todoId).then(
        todos => dispatch({ type : DELETE_TODO, payload : todos })
    ).catch(
        //error => dispatch({type : UPDATE_TODO_FAIL})
    );
}

export const actionCreators = {
    readTodo,
    getOneTodo,
    addTodo,
    updateTodo,
    deleteTodo
};

type ReadTodoAction = ActionType<typeof actionCreators.readTodo>;
type GetOneTodoAction = ActionType<typeof actionCreators.getOneTodo>;
type AddTodoAction = ActionType<typeof actionCreators.addTodo>;
type UpdateTodoAction = ActionType<typeof actionCreators.updateTodo>;
type DeleteTodoAction = ActionType<typeof actionCreators.deleteTodo>;



const initialState: TodoList = {
    todos : null,
    totalLength : 0,
    unsolvedLength : 0,
    solvedLength : 0,
    detail : null
};

export default handleActions(
    {
        [READ_TODO] : (state, action) => {
            return produce( state, (draft)=>{
                draft.todos = action.payload
            } );
        },
        [GET_ONE_TODO] : (state, action) => {
            return produce( state, (draft)=>{
                draft.detail = action.payload
            } );
        },
        [ADD_TODO] : (state, action) => {
            return produce( state, (draft)=>{
                draft.todos = action.payload
            } )
        },
        [UPDATE_TODO] : (state, action) => {
            return produce(state, (draft)=>{
                draft.todos = state.todos.map(
                    todo=>{ if(todo.id === action.payload.id){
                        return action.payload
                    }else{
                        return todo;
                    }}
                );
            })
        },
        [DELETE_TODO] :(state, action) => {
            return produce(state, (draft)=>{
                draft.todos = action.payload;
                draft.detail = null;
            })
        },
    },
    initialState
);

