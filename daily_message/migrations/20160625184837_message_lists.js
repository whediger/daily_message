
exports.up = function(knex, Promise) {
  return knex.schema.createTable('message_lists', function(table){
    table.increments();
    table.string('name');
  });
};

exports.down = function(knex, Promise) {
    return knex.schema.droptable('message_lists');
};
