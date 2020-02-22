const express = require("express");
const recipes = require("./RecipeModle");
const router = express.Router();

//gets and such

router.get("/", (req, res) => {
  recipes
    .getRecipes()
    .then(recipes => {
      res.status(200).json(recipes);
    })
    .catch(err => {
      console.log(err);
    });
});

router.get("/:id", (req, res) => {
  recipes
    .getShoppingList(req.params.id)
    .then(recipes => {
      res.status(200).json(recipes);
    })
    .catch(err => {
      console.log(err);
    });
});

module.exports = router;
