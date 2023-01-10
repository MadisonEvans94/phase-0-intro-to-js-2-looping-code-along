// Code your solutions in this file
function writeCards(nameArray, eventName) {
	let cardArray = [];
	for (let i = 0; i < nameArray.length; i++) {
		cardArray.push(
			`Thank you, ${nameArray[i]}, for the wonderful surprise gift!`
		);
	}
	return cardArray;
}

function countDown(num) {
	let counter = 0;
	for (let i = 0; i < num; i++) {
		console.log(num - counter);
		counter++;
	}
	console.log(num - counter);
}
