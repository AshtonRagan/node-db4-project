exports.up = function(knex) {
  return knex.schema
    .createTable("Recipes", tbl => {
      tbl.increments();
      tbl
        .string("Name", 256)
        .notNullable()
        .index();
    })
    .createTable("Ingredients", tbl => {
      tbl.increments();
      tbl
        .string("Name", 256)
        .notNullable()
        .index();
    })
    .createTable("Instructions", tbl => {
      tbl.increments();
      tbl
        .integer("Recipes_Id")
        .unsigned()
        .notNullable()
        .references("id")
        .inTable("Recipes")
        .onUpdate("CASCADE")
        .onDelete("CASCADE");

      tbl
        .integer("Ingredients_id")
        .unsigned()
        .notNullable()
        .references("id")
        .inTable("Ingredients")
        .onUpdate("CASCADE")
        .onDelete("CASCADE");

      tbl.float("Quantity");
    });
};

exports.down = function(knex) {
  return knex.schema
    .dropTableIfExists("Ingredients")
    .dropTableIfExists("Instructions")
    .dropTableIfExists("Recipes");
};
