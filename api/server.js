const express = require("express");

const carsRouter = require('./cars/cars-router');

const server = express();

server.use(express.json());

server.use('/api/cars', carsRouter);

//fallback
server.use('*', (req, res, next)=>{
    next({status: 404, message: 'not found'})
});

//usually write this in router file but here is ok too
server.use((err, req, res, next)=>{ //eslint-disable-line
    res.status(err.status || 500).json({
        message: err.message
    })
})

module.exports = server
