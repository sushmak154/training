function calculater(choice,x,y){
    if(choice === "a"){
        return x + y;
    }
    else if(choice === "m"){
        return x * y;
    }
    else if(choice === "d"){
        return x - y;
    }
    else{
        return "invalid"
    }
}
let sum = calculater("a", 10,20);
console.log(sum);

let prod = calculater("m", 10,20);
console.log(prod);

let diff = calculater("d", 10,20);
console.log(diff);

calculater();