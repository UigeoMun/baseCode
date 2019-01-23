

export type Todo = {
    id : string;
    name : string;
    content : string;
    due : string;
    done : boolean;
}

export type TodoList = {
    todos : ?(Todo[]),
    totalLength : number,
    unsolvedLength : number,
    solvedLength : number,
    detail : ?Todo
};