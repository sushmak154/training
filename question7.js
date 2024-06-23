let showProducts = () => {
    return [
      { items: "biscutes", price: 100 },
      { items: "chips", price: 25 },
      { items: "mangos", price: 300 },
      { items: "apples", price: 4050 },
      { items: "oranges", price: 500 }
    ];
  };
  
  let products = showProducts();
  
  products.forEach(product => {
    console.log(`items: ${product.items}, Price: ${product.price}`);
  });
  
  