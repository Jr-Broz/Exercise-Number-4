function shoppingSpree() {

 let comprandoZero = wishlist[0].price;
 let comprandoUm = wishlist[1].price;
 let comprandoDois = wishlist[2].price;
 let comprandoTres = wishlist[3].price;
 let comprandoQuatro = wishlist[4].price;

  let somatorioTotal = (comprandoZero + comprandoUm + comprandoDois + comprandoTres + comprandoQuatro)

  console.log(" All those items together, would be a total of: " + 
 "US$" +somatorioTotal);
}

var wishlist = [
    { title: "Tesla Model S", price: 90000 },
    { title: "4 carat diamond ring", price: 45000 },
    { title: "Fancy hacky Sack", price: 5 },
    { title: "Gold fidgit spinner", price: 2000 },
    { title: "A second Tesla Model S", price: 90000 }
];

shoppingSpree()
 // 227005


var total = 0;

wishlist.forEach(function(element) {

  total += element.price
  document.getElementById("mostra").textContent = "It will be a total of US$" + total
  
  
});
