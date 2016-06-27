
exports.up = function(knex, Promise) {
    return knex.schema.createTable('users', function(table){
      table.increments();
      table.string('username');
      table.string('password');
      table.string('first_name');
      table.string('last_name');
      table.string('email');
      table.biginteger('phone_number');
    });
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTable('users');
};
