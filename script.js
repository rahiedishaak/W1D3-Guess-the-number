const readline = require('readline');
let rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const numberToBeGuessed = Math.floor(Math.random() * 25);
let attempts = 5;

rl.question('Welkom! Wat is je naam? ', name => {
    console.log(`Hey ${name}! Je krijgt ${attempts} pogingen.`);

    rl.setPrompt(`Kies een getal van 0 tot 25: `);
    rl.prompt();
    rl.on('line', guess => {
        guess = parseInt(guess);
        if (guess !== numberToBeGuessed) {
            console.log(`${guess} is helaas niet het juiste antwoord.`);
            attempts--;
        } else {
            console.log(`${guess} is het juiste antwoord! Goed gedaan!`);
            console.log(`\nTot de volgende keer, ${name}!`);
            process.exit();
        }

        if (attempts > 0) {
            console.log(`\nPogingen resterend: ${attempts}`)
            rl.prompt();
        } else {
            console.log(`\nGame Over! Het juiste antwoord was ${numberToBeGuessed}.`);
            console.log(`Tot de volgende keer, ${name}!`);
            process.exit();
        }
    });
});