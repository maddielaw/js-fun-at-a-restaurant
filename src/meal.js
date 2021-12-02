function nameMenuItem(foodName) {
  return `Delicious ${foodName}`
};

function createMenuItem(name, price, type) {
    var menuItem = {
    name: name,
    price: price,
    type: type
  };
  return menuItem;
};

function addIngredients(ingredient, ingredientsList) {
    if (ingredientsList.includes(ingredient) === false) {
      return ingredientsList.push(ingredient)
    };
};

function formatPrice(initialPrice, formattedPrice) {
  return formattedPrice = `$${initialPrice}`
};

function decreasePrice(menuItemPrice) {
   return menuItemPrice - (menuItemPrice / 10);
};

function createRecipe(title, ingredients, type) {
  var recipe = {
    title: title,
    ingredients: ingredients,
    type: type
  }
  return recipe;
};


module.exports = {
  nameMenuItem,
  createMenuItem,
  addIngredients,
  formatPrice,
  decreasePrice,
  createRecipe
}


