exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('groups').del()
    .then(function () {
      // Inserts seed entries
      return knex('groups').insert([
        { id: 1, name: 'Apa Sherpa', region_id: 1 },
        { id: 2, name: 'Izzy Asper', region_id: 1 },
        { id: 3, name: 'Khaled Shaya', region_id: 1 },
        { id: 4, name: 'InterMingle', region_id: 2 },
        { id: 5, name: 'Creative Christians', region_id: 2 },
        { id: 6, name: 'GuitarHero', region_id: 2 },
        { id: 7, name: 'Mellowdies', region_id: 3 },
        { id: 8, name: 'South Aucklanders', region_id: 1 },
        { id: 9, name: 'Farmers', region_id: 4 },
        { id: 10, name: 'Raquet', region_id: 3 },
        { id: 11, name: 'Gluten-freeze', region_id: 4 },
        { id: 12, name: 'Savy Singles', region_id: 3 },
        { id: 13, name: 'Outdoorsy', region_id: 3 },
        { id: 14, name: 'HappyFeet', region_id: 1 },
        { id: 15, name: 'Plant-only', region_id: 2 }
      ])
    })
}
