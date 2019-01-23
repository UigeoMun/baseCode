//@flow
import axios from '../defaultClient';
import { type User} from '../data/user';

var dummyUser : User[] = [
    {
        id : 'todo123',
        name : 'todoking',
        pw : '123123',
        login : false
    },
    {
        id : 'todo456',
        name : 'todoman',
        pw : '123123',
        login : false
    }
];



export const signUp = ( id : string,  pw : string , name : string ) : Promise<boolean> => {
    return new Promise<boolean>( (resolve, reject)=>{
        if( dummyUser.some( user=>user.id === id ) ){
            reject(false);
        }else {
            dummyUser.push( {
                id : id,
                name : name,
                pw : pw,
                login : false
            } );
            resolve(true);
        }
    });
}



export const signIn = ( id: string, pw : string ) : Promise<*> => {
    return new Promise( (resolve, reject)=>{
        let user : any = dummyUser.find( (user)=>user.id === id && user.pw === pw );
        if( user === undefined ) reject('fail to login') ;
        else resolve( { id : user.id, name : user.name } );    
    } )
}

export const logout = ( id : string ) : Promise<*> => {
    return new Promise( (resolve, reject)=>{
        let i = dummyUser.findIndex( user=>user.id === id );
        if( i === -1 ) {
            reject(false);
        }
        else {
            dummyUser[i].login = false;
            resolve(true);
        }
    } );
}