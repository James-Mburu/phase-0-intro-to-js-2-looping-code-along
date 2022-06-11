// Code your solutions in this file
let messages = []
function writeCards(names, event){
    for (let counter = 0; counter < names.length;) {
        let message = `Thank you, ${names[counter]}, for the wonderful ${event} gift!`;
        messages.push(message)
        counter = counter + 1
      }
    return messages
}

function countDown(input_number){
    while (input_number >= 0) {
        console.log(input_number)
        input_number--
      }
}