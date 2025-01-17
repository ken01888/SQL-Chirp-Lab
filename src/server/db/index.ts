import * as mysql from 'mysql';
import Chirps from './chirps';
export const Access = mysql.createConnection({
    host:'localhost',
    port:3306,
    user: 'chirprapp',
    password:'1234',
    database:'chirpr'

});

export const Query = (query:string,values?:Array<string|number>) =>{
    return new Promise<Array<any>>((resolve,reject)=>{
        Access.query(query,values,(err,results) =>{
            if(err) return reject(err)
            return resolve(results);


        })
    })
};

export default {
    Chirps

}
