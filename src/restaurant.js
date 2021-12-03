
function createRestaurant(name) {
  var newRestaurant = {
    name: name,
    menus: {
      breakfast: [],
      lunch: [],
      dinner: [],
    }
  };
  return newRestaurant;
};






module.exports = {
  createRestaurant, 
  // addMenuItem,
  // removeMenuItem
}