
exports.up = function(knex, Promise) {
  return knex.schema.createTable('messages', function(table){
    table.increments();
    table.integer('message_list_id').references('message_lists.id').onDelete('CASCADE');
    table.text('message');
  });
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTable('messages');
};
