
exports.up = function(knex, Promise) {
  return knex.schema.createTable('messages', function(table){
    table.increments();
    table.integer('message_list_id').references('message_list_id').onDelete('CASCADE');
    table.string('message');
  });
};

exports.down = function(knex, Promise) {
    return knex.schema.droptable('messages');
};
