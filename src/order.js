
function takeOrder(newOrder, deliveryOrders) {
  if (deliveryOrders.length <= 2) {
    return deliveryOrders.push(newOrder);
  } 
};

function refundOrder(orderID, deliveryOrders) {
  for (i = 0; i < deliveryOrders.length; i ++) {
    if (deliveryOrders[i].orderNumber === orderID) {
      return deliveryOrders.splice(i, 1)
    }
  }
};

function listItems(deliveryOrders) {
  var itemList = [];
  for (i= 0; i < deliveryOrders.length; i ++) {
    itemList.push(deliveryOrders[i].item);
  }
  return itemList.join(", ");
};

function searchOrder() {

};



module.exports = {
  takeOrder,
  refundOrder,
  listItems,
  searchOrder
}