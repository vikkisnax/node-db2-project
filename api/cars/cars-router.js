// const Cars = require('./cars-model');
// const express = require('express');
const router = require('express').Router();

router.get('/', async (req,res,next)=>{
    // Cars.getAll()
    res.json('get all cars')
})

router.get('/:id', async (req, res, next)=>{
    // Cars.getById()
    res.json(`get car by id ${req.params.id}`)
})

router.post('/', async (req, res, next)=>{
    // Cars.create()
    res.json('create new car')
}) 

module.exports = router;
