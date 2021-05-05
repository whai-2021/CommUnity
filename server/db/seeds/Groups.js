
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('Groups').del()
    .then(function () {
      // Inserts seed entries
      return knex('Groups').insert([
        {id: 1, Name: 'Apa Sherpa', Region_Id: 'Auckland'},
        {id: 2, Name: 'Izzy Asper', Region_Id: 'Auckland'},
        {id: 3, Name: 'Khaled Shaya', Region_Id: 'Auckland'}
      ]);
    });
};
