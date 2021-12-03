
function createRestaurant(name, menus) {
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
  }
  return newRestaurant.menus[newMenuItem.type].push(newMenuItem)
}






module.exports = {
  createRestaurant, 
  addMenuItem,
  //removeMenuItem
}