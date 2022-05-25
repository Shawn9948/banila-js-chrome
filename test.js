const a = 231;
let b = 23423;
console.log(a + b);
b = 1
console.log(a + b);

const player = {
    name: "zion",
    points: 10,
    fat: true,
};

console.log(player);
console.log(player.name);


const player = {
    name: "zion",
    sayHello: function (otherPersonName) {
        console.log("hello " + otherPersonName + " nice to meet you")
    },
};

console.log(player.name);
player.sayHeelo("cathy");

const calcurator = {
    plus: funtion(first, second) {
        console.log(first + second);
    },
minus: funtion(first, second) {
    console.log(first - second);
},
devide: function (first, second) {
    console.log(first / second);
},
power: function (first, second) {
    console.log(first ** second);
},
};

calcurator.plus(5, 5);
calcurator.minus(5, 5);
calcurator.devide(5, 5);
calcurator.power(5, 5);


const age = 98;
funtion calculateKrAge(ageOfForeigner){
    return ageOfForeigner + 2;
}

const KrAge = calculateKrAge(age);
console.log(KrAge);


console.log(isNaN(age));

const age = parseInt(prompt("How old are you?"));

if (isNaN(age)) {
    console.log("plese write a number.");
} 
else if (age <18){
    console.log("You are too young.")
}
else{
    console.log("You can drink")
}