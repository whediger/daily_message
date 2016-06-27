
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
        console.log(data[0]);
        console.log('-----------  +===}=======>');
        console.log(data[1]);
        console.log('-----------  +===}=======>');
        console.log(data[2]);
    //   return Promise.all([
    //     // Inserts seed entries
    //     knex('message_lists_users').insert({message_list_id: 'rowValue1'}),
    //     knex('message_lists_users').insert({colName: 'rowValue2'}),
    //     knex('message_lists_users').insert({colName: 'rowValue3'})
    //   ]);
    });
};

// function getNextMessageBy(listName, dataIn){
//   for ( var i = 0; i < dataIn.length; i++ ){
//     if ( dataIn[i].name === listName )
//       return dataIn[i].id;
//   }
// }
//
//
// function getIdByUsername(listName, dataIn){
//   for ( var i = 0; i < dataIn.length; i++ ){
//     if ( dataIn[i].name === listName )
//       return dataIn[i].id;
//   }
// }
//
// function getIdByMessageListName(listName, dataIn){
//   for ( var i = 0; i < dataIn.length; i++ ){
//     if ( dataIn[i].name === listName )
//       return dataIn[i].id;
//   }
// }
