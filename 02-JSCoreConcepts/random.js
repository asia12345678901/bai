const losuj = (min, max) => {
	return Math.floor( Math.random() * ( max - min + 1 ) + min );
}

numbers = []

for(let n=0; n<10; n++) {
	numbers.push(losuj(5,20));
}

numbers.forEach(item => {console.log(item);});