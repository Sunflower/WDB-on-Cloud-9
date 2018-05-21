let faker = require("faker");

let shopHeader = `===================
WELCOME TO MY SHOP!
===================`;

function fakeIt() {
     return faker.fake("{{commerce.productName}} - ${{commerce.price}}");
}

console.log(shopHeader);

for (let i = 0; i < 10; i++) {
    console.log(fakeIt());
}