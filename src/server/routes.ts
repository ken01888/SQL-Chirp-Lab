import * as express from 'express';
import db from './db'

const router = express.Router();
const app = express();

//Get All Users

router.get('/api/users/', async(req,res)=>{
    try {
        res.json(await db.Chirps.allUsers())
    } catch (error) {
        console.log(error);
        res.sendStatus(500)
    }

})

//Create new user

router.post('/api/users/', async(req,res)=>{
    const chirpDTO = req.body
    try {
       const result = await db.Chirps.insertUsers(chirpDTO)
        res.json(result)
    } catch (error) {
        console.log(error);
        res.sendStatus(500)
    }

})

//Get All Chrips
router.get('/api/chirps', async(req,res)=>{
    try {
        res.json(await db.Chirps.allChirps())
    } catch (error) {
        console.log(error);
        res.sendStatus(500)
    }

})

//Get Single Chirp
router.get('/api/chirps/:id', async(req,res)=>{
    try {
        res.json((await db.Chirps.singleChirp(req.params.id)))
    } catch (error) {
        console.log(error);
        res.sendStatus(500)
    }

})

//Delete Chirp
router.delete('/api/chirps/:id', async(req,res)=>{
    try {
        res.json((await db.Chirps.deleteChirp(req.params.id)))
    } catch (error) {
        console.log(error);
        res.sendStatus(500)
    }

})

//Add Chirp
router.post('/api/chirps/', async(req,res)=>{
    const chirpDTO = req.body
    try {
       const result = await db.Chirps.insertChirp(chirpDTO)
        res.json(result)
    } catch (error) {
        console.log(error);
        res.sendStatus(500)
    }

})

//Update Chirp
router.put('/api/chirps/:id', async(req,res)=>{
    const chirpDTO = req.body
    try {
       const result = await db.Chirps.updateChirp(chirpDTO,req.params.id)
        res.json(result)
    } catch (error) {
        console.log(error);
        res.sendStatus(500)
    }

})



export default router;