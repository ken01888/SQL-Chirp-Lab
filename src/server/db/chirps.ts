import {Query} from './index';

const allChirps = async () => Query('SELECT * FROM Chirps');
const singleChirp = async (id:string) => Query('SELECT * FROM Chirps WHERE id = ?',[id]);
const deleteChirp = async(id:string)=>Query('DELETE FROM Chirps WHERE id = ?',[id]);
const insertChirp = async(chirp :any )=>Query('INSERT INTO Chirps SET ?' ,chirp);
const updateChirp = async(newContent:any,chirpId:string)=>Query('UPDATE Chirps SET ? WHERE id = ?', [newContent,chirpId])
const allUsers = async () => Query('SELECT * FROM Users');
const insertUsers = async(user :any )=>Query('INSERT INTO Users SET ?' ,user);




export default {
    allChirps,
    singleChirp,
    deleteChirp,
    insertChirp,
    updateChirp,
    allUsers,
    insertUsers
    
}