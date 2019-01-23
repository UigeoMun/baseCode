//@flow

import axios from '../../defaultClient';
import { type Todo} from 'lib/data/todo';
import { Promise } from 'q';


//import queryString from 'query-string';

var dummy : Todo[] = [
    {
        "id" : "td0001",
        "name" : "make redux",
        "content" : "store/modules/todo.js redux",
        "due" : "2019-01-21T03:24:00",
        "done" : true
    },
    {
        "id" : "td0002",
        "name" : "make component",
        "content" : "components/ component",
        "due" : "2019-01-21T04:24:00",
        "done" : false
    },
    {
        "id" : "td0003",
        "name" : "make container",
        "content" : "containers container",
        "due" : "2019-01-21T05:24:00",
        "done" : false
    },
    {
        "id" : "td0004",
        "name" : "make page",
        "content" : "page/ page",
        "due" : "2019-01-21T06:24:00",
        "done" : false
    },
    {
        "id" : "todo5",
        "name" : "make styles",
        "content" : "styles/ csss",
        "due" : "2019-01-21T07:24:00",
        "done" : false
    },
];



export const retrieveTodos = ( limit: number, offset : number ) : Promise<*> => {
    return new Promise( (resolve, reject)=>{
        try {
            console.log(limit, offset);
            resolve(dummy.slice(offset, offset + limit));
        } catch (error) {
            reject(error);
        }
    } ); 
}

export const getTodo = (id : ?string) : Promise<*> => {
    return new Promise( (resolve, reject)=> {
        let todo : any = dummy.find( todo=>todo.id === id );
        if(id === null) {
            resolve(null)
        }
        else if(todo === undefined) {
            reject(false);
        }
        else {
            resolve(todo);
        }
    });
}



export const addTodo = ( todo : Todo ) : Promise<*> => {
    return new Promise( (resolve, reject)=>{
        try {
            dummy.push(todo);
            resolve(dummy);
        } catch (error) {
            reject(error);
        }
    } );
}

export const updateTodo = (todo : Todo) : Promise<*> => {
    return new Promise( (resolve, reject)=> {
        try {
            let index = dummy.findIndex( e => e.id === todo.id );
            dummy[index] = todo;
            resolve(dummy);
        } catch (err) {
            reject( false);
        }
    } );
}

export const deleteTodo = ( todoId : string) : Promise<*> => {
    return new Promise( (resolve, reject) => {
        try {
            let index = dummy.findIndex( todo=>todo.id == todoId );
            dummy.splice( index ,1);
            resolve( dummy);
        } catch (error) {
            reject( false);
        }
    });
}
