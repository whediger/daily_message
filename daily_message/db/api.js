var knex = require('./knex')

module.exports = {
  getAllLists: function () {
    return knex('message_lists');
  },
  findUserByUsername: function (username) {
    console.log('inside f-user-b-uname' + username);
    return knex('users').select().where({username: username}).first()
  },
  addUser: function (body) {
    return knex('users').insert(body, 'id')
  },
  findUserById: function (id) {
    return knex('users').where({id: id}).first();
  }
}
