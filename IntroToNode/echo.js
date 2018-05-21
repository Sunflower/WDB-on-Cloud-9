function echo(str, n) {
    for (let i = 0; i < n; i++) {
        console.log(str);
    }
}

echo("ECHO!!", 3);
echo("TATER TOTS", 10);

var knockknock = require('knock-knock-jokes')
console.log(knockknock());