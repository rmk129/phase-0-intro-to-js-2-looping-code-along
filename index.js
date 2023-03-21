
function writeCards(name, event) {
    const messages = []
    for (let i = 0; i < name.length; i++) {
        messages[i] = `Thank you, ${name[i]}, for the wonderful ${event} gift!`;
    }
    return messages;
}

function countDown(number) {

    while (number >= 0) {
        console.log(number--)
    }
return number;

}

for (let age = 30; age < 40; age++) {
    console.log(`I'm ${age} years old. Happy Birthday to me!`);
    
}
