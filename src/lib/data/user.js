export type User = {
    id : string;
    name : string;
    pw : string;
    login : boolean;
};


export type CurrentUser = {
    id : ?string;
    name : ?string;
}