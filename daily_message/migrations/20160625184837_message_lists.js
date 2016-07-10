
exports.up = function(knex, Promise) {
  return knex.schema.createTable('message_lists', function(table){
    table.increments();
    table.string('name');
    table.boolean('show_public');
  });
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTable('message_lists');
};
