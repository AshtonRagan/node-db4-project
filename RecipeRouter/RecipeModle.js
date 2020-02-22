const db = require("../Data/Db.cofig");

//put sql stuff in here
//Quaries and such

module.exports = {
  getRecipes,
  getShoppingList
};

function getRecipes() {
  return db("Recipes");
}

function getShoppingList(Recipes_id) {
  return db
    .select("ingred.Name", "inst.Quantity")
    .from("instructions as inst")
    .join("ingredients as ingred", "inst.ingredients_id", "ingred.id")
    .where({ Recipes_id });
}
