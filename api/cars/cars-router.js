const Car = require('./cars-model');
const express = require('express');
const router = require('express').Router();

const {
    checkCarId,
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

router.post('/', async (req, res, next)=>{
    res.json('create new car')
}) 

//error handling mw is in server.js so next(err) will fall back to that 

module.exports = router;