
function createRestaurant(name) {
    var newRestaurant = {
      name: name,
      menus: {
      breakfast: [],
      lunch: [],
      dinner: []
      }
    };
    return newRestaurant;
};



function addMenuItem(newRestaurant, newMenuItem) {
    for (i = 0; i < newRestaurant.menus[newMenuItem.type].length; i ++) {
      if (newRestaurant.menus[newMenuItem.type][i].name === newMenuItem.name) {
        return 
      } 
    };
    return newRestaurant.menus[newMenuItem.type].push(newMenuItem)
};


function removeMenuItem(newRestaurant, item, type) {
    var menuTypes = newRestaurant.menus[type];
      for (i = 0; i < menuTypes.length; i ++) {
      if (menuTypes[i].name === item) {
      newRestaurant.menus[type].splice(i, 1);
      return `No one is eating our ${item} - it has been removed from the ${type} menu!`
      } 
    }
    return `Sorry, we don't sell ${item}, try adding a new recipe!`
};



module.exports = {
  createRestaurant, 
  addMenuItem,
  removeMenuItem
}