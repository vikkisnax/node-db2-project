const Car = require('./cars-model');
const db = require('../../data/db-config');

exports.checkCarId = async (req, res, next) => {
  try {
    const car = await Car.getById(req.params.id);
    if (car){
      req.car = car
      next()
    } else {
      next({
        status: 404,
        message: 'car not found'
      })
    }
  }
  catch(err) {
    next(err)
  }
}

exports.checkCarPayload = (req, res, next) => {
  if (!req.body.vin)
    return next({ 
      status: 400,
      message: 'vin is missing',
  })
  if (!req.body.make)
  return next({ 
    status: 400,
    message: 'make is missing',
  })
  if (!req.body.model)
  return next({ 
    status: 400,
    message: 'model is missing',
  })
  if (!req.body.mileage)
  return next({ 
    status: 400,
    message: 'mileage is missing',
  })
  //so we can go to the next mw and eventually to the router
  next()
}

exports.checkVinNumberValid = (req, res, next) => {
  next()
}

exports.checkVinNumberUnique = (req, res, next) => {
  next()
}
