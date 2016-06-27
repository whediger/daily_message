
exports.seed = function(knex, Promise) {
  return knex('users').del()
  .then(function(){
    return Promise.join(
      // Inserts seed entries
      knex('users').insert({first_name: 'Joe',
                            last_name:'Blow',
                            email: 'joeblow@aol.com',
                            phone_number:'3035478715',
                            username:'joey457',
                            password:'openit'}),

      knex('users').insert({first_name: 'Sally',
                            last_name:'Mae',
                            email: 'sally@businesswoman.com',
                            phone_number:'3035478715',
                            username:'sallySays',
                            password:'openit'}),
                            
      knex('users').insert({first_name: 'Hector',
                            last_name:'Rodreges',
                            email: 'hector@dontspamme.com',
                            phone_number:'3035478715',
                            username:'hector1',
                            password:'openit'})
    );
  });
};
