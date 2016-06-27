
exports.up = function(knex, Promise) {
  return knex.schema.createTable('message_lists_users', function(table){
    table.increments();
    table.integer('user_id').references('users.id').onDelete('CASCADE');
    table.integer('message_list_id').references('message_lists.id').onDelete('CASCADE');
    table.integer('next_message_id').references('messages.id').onDelete('CASCADE');
  });
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTable('message_lists_users');
};
