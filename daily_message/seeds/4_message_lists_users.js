
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('message_lists_users').del()
    .then(function(){
      return Promise.all([
        knex('users'),
        knex('messages'),
        knex('message_lists')
      ])
    })
    .then(function (data) {
        var users = data[0];
        var messages = data[1];
        var message_lists = data[2];

        //seed_message as var to keep functions under control
        var seed_message = 'Cleanliness. Tolerate no uncleanliness in body, cloathes, or habitation.';
        var seed_message2 = 'Temperance. Eat not to dullness; drink not to elevation.';
        var benList = "Benjamin Franklin 13 Virtues"
        console.log(users[0].username);
        console.log('-----------  +===}=======>');
        console.log(messages[0].message);
        console.log('-----------  +===}=======>');
        console.log(message_lists[0].name);



      return Promise.all([
        // Inserts seed entries
        //knex('message_lists_users').insert({message_list_id: 'rowValue1'}),
        //knex('message_lists_users').insert({colName: 'rowValue2'}),
        knex('message_lists_users').insert({next_message_id: getNextMessageIdByMessage(seed_message, messages),
                                            message_list_id: getIdByMessageListName(message_lists, benList),
                                            user_id: getIdByUsername(users, 'joey457')})
      ]);
    });
};

function getNextMessageIdByMessage(message, messages){
  for (var i = 0; i < messages.length; i++){
    if (messages[i].message === message)
      return messages[i].id;
  }
}


function getIdByUsername(users, username){
  for ( var i = 0; i < users.length; i++ ){
    if ( users[i].username === username )
      return users[i].id;
  }
}

function getIdByMessageListName(message_lists, name){
  for ( var i = 0; i < message_lists.length; i++ ){
    if ( message_lists[i].name === name )
      return message_lists[i].id;
  }
}
