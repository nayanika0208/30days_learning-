const objects=[

	{
id: 1,
name: "Leanne Graham",
username: "Bret",
email: "Sincere@april.biz",
born: 1887,
dead:1972,

},
{id: 2,
name: "Ervin Howell",
username: "Antonette",
email: "Shanna@melissa.tv",
born: 1867,
dead:2016,
},
{
	id: 3,
name: "Clementine Bauch",
username: "Samantha",
email: "Nathan@yesenia.net",
born: 1787,
dead:1813,
},
{
	id: 4,
name: "Patricia Lebsack",
username: "Karianne",
email: "Julianne.OConner@kory.org",
born: 1960,
dead:2016,

},
{
	id: 5,
name: "Chelsey Dietrich",
username: "Kamren",
email: "Lucio_Hettinger@annie.ca",
born: 1827,
dead:1920,
},
{
	id: 6,
name: "Mrs. Dennis Schulist",
username: "Leopoldo_Corkery",
email: "Karley_Dach@jasper.info",
born: 1987,
dead:2010,
}


];

const people=["Leanne,Graham","Ervin,Howell","Patricia ,Lebsack","Chelsey,Dietrich","Dennis,Schulist","Kurtis,Weissnat","Nicholas,Runolfsdottir"
];

//Array.prototype.filter()
//filter the array for people born in 1900s

const nineteen = objects.filter((user)=>{
	return user.dead >=2005

});
console.table(nineteen);

//Array.prototype.map
//map the array for id and first name

const mapArray =objects.map((user)=>{
	return `person with ${user.id} is ${user.name}`
});
console.log(mapArray);
//Array.prototype.sort
//sort the array according to birthdates
const sorted =objects.sort((a,b) => {(a.born > b.born ? 1 : -1)});
console.table(sorted)

//Array.prototype.reduce
//reduce functio
const  reduceArray =objects.reduce((accumulator,user)=>{
	return accumulator+(user.dead-user.born)

},0)
console.log(`the users lived for ${reduceArray} years`);

//sort the arrays according to user lives
const sortLives =objects.sort((a,b)=>{
	return ((a.dead-a.born)>(b.dead-b.born) ? 1 :-1)
});
console.table(sortLives);



const cde=objects.filter((user)=>user.name.includes("Chelsey Dietrich"));
console.log(cde);

//sort the people alphabeticaly according to their last names
const alpha=people.sort((a,b)=>
	{
		const [afirst,alast]=a.split(",");
		const [bfirst,blast]=b.split(",");
		return ((alast>blast) ? 1 :-1 )
	});
console.table(alpha)