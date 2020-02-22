exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("Recipes")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("Recipes").insert([
        { id: 1, Name: "Chili-HotDog" },
        { id: 2, Name: "Boiled-Water" },
        { id: 3, Name: "Toast!" }
      ]);
    });
};
