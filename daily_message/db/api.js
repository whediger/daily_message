var knex = require('./knex')

module.exports = {
  getMessagesInLists: function () {
    return Promise.all([
      knex('messages'),
      knex('message_lists')
    ]).then(function(data) {
      var messageLists = [];
      var messages = data[0];
      var lists = data[1];

      for (var i = 0; i < lists.length; i++) {
        var messageArray = [];
        for (var e = 0; e < messages.length; e++) {
          if ( messages[e].message_list_id == lists[i].id) {
            messageArray.push(messages[e].message);
          }
        }
        var wholeList = { title: lists[i].name,
                             id: i,
                       messages: messageArray };
        messageLists.push(wholeList);
      }
      return messageLists;
    });
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
