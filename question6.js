function calculate(choice, x, y) {
    if (choice === "a") {
      return x + y;
    } else if (choice === "m") {
      return x * y;
    } else if (choice === "d") {
      return x - y;
    } else {
      return "Invalid choice";
    }
  }

let sum = calculate("a", 10, 20);
console.log(sum);

let product = calculate("m", 10, 20);
console.log(product);

let difference = calculate("d", 10, 20);
console.log(difference);