
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('messages').del()
    .then(function () {
      return Promise.all([
        // Inserts seed entries
        knex('message_lists')
      ])
    })
    .then(function(data){
      var lists = data[0];
      console.log('-----------  +===}=======>');
      console.log(lists);//todo---add helper to look up values for FKs, iterate through array.
      console.log(getIdByMessageListName('Benjamin Franklin 13 Virtues', lists));
      console.log('-----------  +===}=======>');
      var benFranklin = getIdByMessageListName('Benjamin Franklin 13 Virtues', lists);
      var cleanCode = getIdByMessageListName('9 Qualities of Clean Code', lists);
      return Promise.all([
        knex('messages').insert({message_list_id: benFranklin, message:'Temperance. Eat not to dullness; drink not to elevation.'}),
        knex('messages').insert({message_list_id: benFranklin, message:'Silence. Speak not but what may benefit others or yourself; avoid trifling conversation.'}),
        knex('messages').insert({message_list_id: benFranklin, message:'Order. Let all your things have their places; let each part of your business have its time.'}),
        knex('messages').insert({message_list_id: benFranklin, message:'Resolution. Resolve to perform what you ought; perform without fail what you resolve.'}),
        knex('messages').insert({message_list_id: benFranklin, message:'Frugality. Make no expense but to do good to others or yourself; i.e., waste nothing.'}),
        knex('messages').insert({message_list_id: benFranklin, message:'Industry. Lose no time; be always employd in something useful - cut off all unnecessary actions.'}),
        knex('messages').insert({message_list_id: benFranklin, message:'Sincerity. Use no hurtful deceit; think innocently and justly, and, if you speak, speak accordingly.'}),
        knex('messages').insert({message_list_id: benFranklin, message:'Justice. Wrong none by doing injuries, or omitting the benefits that are your duty.'}),
        knex('messages').insert({message_list_id: benFranklin, message:'Moderation. Avoid extremes; forbear resenting injuries so much as you think they deserve.'}),
        knex('messages').insert({message_list_id: benFranklin, message:'Cleanliness. Tolerate no uncleanliness in body, cloathes, or habitation.'}),
        knex('messages').insert({message_list_id: benFranklin, message:'Tranquillity. Be not disturbed at trifles, or at accidents common or unavoidable.'}),
        knex('messages').insert({message_list_id: benFranklin, message:'Chastity. Rarely use venery but for health or offspring, never to dullness, weakness, or the injury of your own or anothers peace or reputation.'}),
        knex('messages').insert({message_list_id: benFranklin, message:'Humility. Imitate Jesus and Socrates.'}),

        knex('messages').insert({message_list_id: cleanCode, message:'Bad code does too much – Clean code is focused. It should conform to SRP (Single Responsibility Principle). Shortly speaking, we can say that SRP (according to some well-known definitions) is about making sure that if you can think of the reason for changing a class you should not be able to come up with more than one.'}),
        knex('messages').insert({message_list_id: cleanCode, message:'The language you wrote your code with should look like it was made for the problem. If you claim that something can only be done by means of a workaround, it usually means that you haven’t spent enough time on trying to find a good, clean solution.'}),
        knex('messages').insert({message_list_id: cleanCode, message:'It should not be redundant. It should comply with the DRY rule (Don’t Repeat Yourself). When the DRY principle has successfully been applied, the modification of any single element of a system doesn’t require a change in any other logically unrelated elements.'}),
        knex('messages').insert({message_list_id: cleanCode, message:'Reading your code should be pleasant. To achieve this you should try to comply with the KISS principle (Keep It Simple, Stupid!) and YAGNI principle (You Ain’t Gonna Need It). The KISS principle states that most systems work best if they are kept simple rather than made complex.'}),
        knex('messages').insert({message_list_id: cleanCode, message:'Can be easily extended by any other developer. You dont write code for yourself , or worse –  for a compiler. You write code for other developers. Don’t torture other developers by producing a hardly maintainable and extendable code. Besides, in some months time you could be that “other developer” yourself.'}),
        knex('messages').insert({message_list_id: cleanCode, message:'It should have minimal dependencies. The more dependencies it has, the harder it is to maintain and change it in the future. You can always help yourself in achieving the goal of having minimal dependencies by using e.g. NDEPEND for checking potential incorrectness in the dependencies of your code.'}),
        knex('messages').insert({message_list_id: cleanCode, message:'Smaller is better. Code should be minimal. Both classes and methods should be short, preferably just a few lines of code. It should be well divided (also within one class). The better you divide your code the easier it becomes to read it.'}),
        knex('messages').insert({message_list_id: cleanCode, message:'It should have unit and acceptance tests. How can we know that our code complies with the requirements if we don’t write tests? How can we maintain and extend it without the fear that it will stop working? Code without tests is simply not clean. For more info: http://blog.goyello.com/2011/10/06/three-pillars-of-unit-tests/'}),
        knex('messages').insert({message_list_id: cleanCode, message:'It should be expressive. Expressiveness of the code means that it has meaningful names. These names should express their intention. They should not mislead you. They should be distinctive. Expressiveness makes code document itself making the need for documentation less important. For more info: http://c2.com/cgi/wiki?SelfDocumentingCode'}),
      ])

    })

};

function getIdByMessageListName(listName, dataIn){
  for ( var i = 0; i < dataIn.length; i++ ){
    if ( dataIn[i].name === listName )
      return dataIn[i].id;
  }
}
