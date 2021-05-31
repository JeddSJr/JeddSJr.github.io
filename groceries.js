var products = [
  {
    name: "almond",
    lactoseFree: true,
		nutFree: false,
    organic: true,
		price: 0.99
  },
  {
    name: "bread",
		lactoseFree: false,
		nutFree: true,
    organic:false,
		price: 2.35
  },
  {
    name: "brocoli",
    lactoseFree: true,
		nutFree: true,
    organic: true,
		price: 1.99
  },
  {
    name: "granola",
    lactoseFree: true,
		nutFree: false,
    organic: false,
		price: 1.50
  },
  {
    name: "hazelnut ice-cream",
    lactoseFree: false,
		nutFree: false,
    organic:false,
		price: 8.70
  },
  {
    name: "macadamia & chocolate cookie",
    lactoseFree: false,
		nutFree: false,
    organic: false,
		price: 7.35
  },
  {
    name: "pasta",
    lactoseFree: true,
		nutFree: true,
    organic: false,
		price: 5.00
  },
  {
    name: "salmon",
    lactoseFree: true,
    nutFree: true,
    organic: true,
    price: 10.00
  },
  {
    name: "tomato sauce",
    lactoseFree: true,
		nutFree: true,
    organic: false,
		price: 2.10
  },
  {
    name: "yogurt",
    lactoseFree: false,
		nutFree: true,
    organic: true,
		price: 3.90
  },
];

  function restrictListProducts(prods, restriction,filter) {
    console.log(filter);
    var product_list = [];

    prods.sort(function(a,b){
      return a.price - b.price;
    })

	  for (var i=0; i<prods.length; i+=1) {
		if ((restriction == "lactoseFree") && (prods[i].lactoseFree == true)){

      filterList(i,product_list,prods,filter);
		}
		else if ((restriction == "nutFree") && (prods[i].nutFree == true)){
      /*var name = prods[i].name;
      var price = prods[i].price.toString();
      var pr = name+" : $"+price;*/
      filterList(i,product_list,prods,filter);
		}
		else if (restriction == "None"){
      /*var name = prods[i].name;
      var price = prods[i].price.toString();
      var pr = name+" : $"+price;*/
      filterList(i,product_list,prods,filter);
		}
	}
	return product_list;
  }

  function filterList(i,product_list,prods,filter) {
    if(filter ==true){
      if (prods[i].organic == true) {
        product_list.push(prods[i]);
      }
    }
    else {
      product_list.push(prods[i]);
    }
  }

  function getTotalPrice(chosenProducts) {
	   totalPrice = 0;
	   for (let i=0; i<products.length; i+=1) {
		      if (chosenProducts.indexOf(products[i].name) > -1){
              console.log("hello")
			         totalPrice += products[i].price;
		      }
	    }
	 return totalPrice;
  }
