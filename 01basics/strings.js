const name ="utkarsh"
const repocount = 50
// console.log(name + repocount + "value");
console.log(`hello my name is ${name} and my repocount is ${repocount}`);

const gamename = new String('utkarshj')
console.log(gamename[0]);
console.log(gamename.length );
console.log(gamename.toUpperCase());

const newstring = gamename.substring(0,4)
console.log(newstring);

const anotherstring = gamename.slice(3, 7)
console.log(anotherstring);

const newstringone = "   utkarsh   "
console.log(newstringone);
console.log(newstringone.trim());


const url = "https://utkarsh.com/utkarsh%20jain"

console.log(url.replace('%20', '-'))

console.log(url.includes('sundar'))

console.log(gamename.split('-'));