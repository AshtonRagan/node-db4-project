exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("Ingredients")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("ingredients").insert([
        { id: 1, Name: "Water" },
        { id: 2, Name: "Chili" },
        { id: 3, Name: "Bread" },
        { id: 4, Name: "HotDog" }
      ]);
    });
};
