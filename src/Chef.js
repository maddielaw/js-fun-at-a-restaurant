class Chef {
  constructor(name, restaurant) {
     this.name = name;
     this.restaurant = restaurant;
  }
  greetCustomer(customerName, isMorning) {
    if (isMorning === true) {
      return `Good morning, ${customerName}!`
    } else {
    return `Hello, ${customerName}!`;
    }
  }
};

module.exports = Chef;