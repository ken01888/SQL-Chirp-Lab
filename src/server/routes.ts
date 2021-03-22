import * as express from 'express';
import db from './db'

const router = express.Router();
const app = express();

router.get('/api/users/', async(req,res)=>{
    try {
        res.json(await db.Chirps.allUsers())
    } catch (error) {
        console.log(error);
        res.sendStatus(500)
    }

})

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

router.get('/api/chirps', async(req,res)=>{
    try {
        res.json(await db.Chirps.allChirps())
    } catch (error) {
        console.log(error);
        res.sendStatus(500)
    }

})

router.get('/api/chirps/:id', async(req,res)=>{
    try {
        res.json((await db.Chirps.singleChirp(req.params.id)))
    } catch (error) {
        console.log(error);
        res.sendStatus(500)
    }

})

router.delete('/api/chirps/:id', async(req,res)=>{
    try {
        res.json((await db.Chirps.deleteChirp(req.params.id)))
    } catch (error) {
        console.log(error);
        res.sendStatus(500)
    }

})

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