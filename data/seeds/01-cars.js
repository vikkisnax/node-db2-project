const cars = [
    //all fields
    {
        vin: '1111111111111',
        make: 'toyota',
        model: 'prius',
        mileage: 25000,
        title: 'clean',
        transmission: 'manual',
    },
    //everything but transmission field
    {
        vin: '1111111111112',
        make: 'toyota',
        model: 'corolla',
        mileage: 115000,
        title: 'clean',
    },
    //made it so only mandatory fields are there 
    {
        vin: '1111111111113',
        make: 'ford',
        model: 'focus',
        mileage: 35000,
    },
]

//dependency injection
// exports.seed = function(knex){
//     return knex('cars')
//     .truncate().then(()=>{
//         return knex('cars').insert(cars)
//     })
// }

//or

exports.seed = async function(knex){
    await knex('cars').truncate()
    await knex('cars').insert(cars)
}
//can use this once we have a db 