
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('Users').del()
    .then(function () {
      // Inserts seed entries
      return knex('Users').insert([
        {id: 1, Surname: '', Given_Name: '', Username: '', Password_Hash: ''} 
      ]);
    });
};
