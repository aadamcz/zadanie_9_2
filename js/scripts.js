var femaleNames = ['Asia', 'Kasia', 'Jola', 'Ola'];
var maleNames = ['Piotr', 'Marek', 'Jan', 'Witek'];

var allNames = femaleNames.concat(maleNames);

/*
Add newName. If array contains newName
return "Name already exists". Else push
name into the array
*/
var newName = 'Piotr';

/*Check indexOfName. If returns -1, the name does not
exist and can be pushed into the array
*/

var indexOfName = allNames.indexOf(newName);

if (indexOfName ==-1) {
	allNames.push(newName);
	console.log(allNames);
} else {
	console.log('Name already exists');
};

