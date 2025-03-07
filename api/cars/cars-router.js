const Car = require('./cars-model');
const express = require('express');
const router = require('express').Router();

const {
    checkCarId,
    checkCarPayload,
    checkVinNumberValid,
    checkVinNumberUnique
} = require('./cars-middleware')

router.get('/', async (req,res,next)=>{
    try{
        const cars = await Car.getAll();
        res.json(cars)
    }
    catch(err){
        next(err)
    }
})

router.get('/:id', checkCarId, async (req, res)=>{
    res.json(req.car)
})

router.post('/', 
    checkCarPayload,
    checkVinNumberValid,
    checkVinNumberUnique,
    async (req, res, next)=>{
        try{
            const car = await Car.create(req.body);
            res.json(car)
        }
        catch(err){
            next(err)
        }
}) 

//error handling mw is in server.js so next(err) will fall back to that 

module.exports = router;