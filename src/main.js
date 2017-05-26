let apples = new GroceryItem('Apple', 9);
let carrots = new GroceryItem('Carrots', 3);
let swpotato = new GroceryItem('Sweet Potato', 4);

var groceryList = $('GroceryItem').map(function() {
  return this.id; }).get();
