
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('message_lists').del()
    .then(function () {
      return Promise.all([
        // Inserts seed entries
        knex('message_lists').insert({name: '9 Qualities of Clean Code'}),
        knex('message_lists').insert({name: "Benjamin Franklin 13 Virtues"})
      ]);
    });
};
