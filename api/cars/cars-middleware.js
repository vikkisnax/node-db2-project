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
  // DO YOUR MAGIC
}

exports.checkVinNumberValid = (req, res, next) => {
  // DO YOUR MAGIC
}

exports.checkVinNumberUnique = (req, res, next) => {
  // DO YOUR MAGIC
}
