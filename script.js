for (let i = 1; i <= 20; i++) {
    console.log(i);
}

for (let i = 20; i >= 1; i--) {
    console.log(i);
}

for (let i = 2; i <= 50; i += 2) {
    console.log(i);
}

let sum = 0;

for (let i = 1; i <= 100; i++) {
    sum += i;
}
console.log(sum);

for (let i = 1; i <= 10; i++) {
    console.log("Квадрат " + i + " - " + i * i);
}

for (let i = 1; i <= 10; i++) {
    console.log("5 * " + i + " = " + 5 * i);
}

let sum = 0;

for (let i = 2; i <= 50; i += 2) {
    sum += i;
}
console.log(sum); 

for (let i = 0; i <= 100; i += 5) {
    console.log(i);
}

let count = 0;

for (let i = 1; i <= 100; i++) {
    if (i % 7 === 0) {
        count++;
    }
}

console.log(count);

let user = {
    name: "Ali",
    age: 20,
    city: "Bishkek"
};

console.log(user.name);
console.log(user.age);
console.log(user.city);

user.age = 25;
console.log(user);

user.phone = "+996 880 0555";
console.log(user);

delete user.city;
console.log(user);

console.log("email" in user);

for (let key in user) {
    console.log(key);
}



let count = 0;

for (let key in user) {
    count++;
}

console.log(count);

let numbers = [10, -5, 7, 20, 3];

for (let i = 0; i < numbers.length; i++) {
    console.log(numbers[i]);
}

let sum = 0;

for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
}

console.log(sum);

let max = numbers[0];

for (let i = 1; i < numbers.length; i++) {
    if (numbers[i] > max) {
        max = numbers[i];
    }
}

console.log(max);


let min = numbers[0];

for (let i = 1; i < numbers.length; i++) {
    if (numbers[i] < min) {
        min = numbers[i];
    }
}

console.log(min);


let count = 0;

for (let i = 0; i < numbers.length; i++) {
    count++;
}

console.log(count);


let sum = 0;

for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 === 0) {
        sum += numbers[i];
    }
}

console.log(sum);


let count = 0;

for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] < 0) {
        count++;
    }
}

console.log(count);


let product = 1;

for (let i = 0; i < numbers.length; i++) {
    product *= numbers[i];
}

console.log(product);


let maxIndex = 0;

for (let i = 1; i < numbers.length; i++) {
    if (numbers[i] > numbers[maxIndex]) {
        maxIndex = i;
    }
}

console.log(maxIndex);

let minIndex = 0;

for (let i = 1; i < numbers.length; i++) {
    if (numbers[i] < numbers[minIndex]) {
        minIndex = i;
    }
}

console.log(minIndex);

let found = false;

for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] === 10) {
        found = true;
    }
}

console.log(found);


let count = 0;

for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] === 7) {
        count++;
    }
}

console.log(count);


let lastPositive = null;

for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] > 0) {
        lastPositive = numbers[i];
    }
}

console.log(lastPositive);


let sum = 0;

for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
}

let average = sum / numbers.length;

console.log(average);