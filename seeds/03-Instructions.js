exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("Instructions")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("Instructions").insert([
        { Recipes_Id: 1, Ingredients_id: 2, Quantity: 1 },
        { Recipes_Id: 1, Ingredients_id: 3, Quantity: 2 },
        { Recipes_Id: 1, Ingredients_id: 4, Quantity: 1 },
        { Recipes_Id: 2, Ingredients_id: 1, Quantity: 3.5 },
        { Recipes_Id: 3, Ingredients_id: 3, Quantity: 2 }
      ]);
    });
};
