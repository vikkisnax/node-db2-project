exports.up = function (knex) {
  return knex.schema.createTable('cars', tbl => {
    tbl.increments();
    tbl.string('vin', 13).unique().notNullable();
    tbl.text('make', 128).notNullable();
    tbl.text('model', 128).notNullable();
    tbl.text('mileage').numeric().unsigned().notNullable();
    tbl.text('title', 128);
    tbl.text('transmission', 128);
  })
};

exports.down = function (knex) {
  return knex.schema.dropTableIfExists('cars');
};
