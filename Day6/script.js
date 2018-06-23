//address of the api i want to fetch
const endpoint = 'https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json';

//initializing the cities array
const cities =[];

//fetch returns a promise
fetch(endpoint)
.then(response=>response.json())
.then(data=>cities.push(...data))

const matching =(wordToMatch,cities)=>{
	const filterArray=cities.filter(place=>{
		//here we have to se how to match the place in the cities
		const regex= new RegExp(wordToMatch, 'gi');
		return place.city.match(regex) || place.state.match(regex);
	});
	return filterArray;
}
function numberWithCommas(x) {
    x = x.toString();
    var pattern = /(-?\d+)(\d{3})/;
    while (pattern.test(x))
        x = x.replace(pattern, "$1,$2");
    return x;
}

function displaymatches(){
	//get the matched value
  const matchArray= matching(this.value,cities);
  //showing the result in the page
  //we have to map through the match array and return the list

  const resultShow =matchArray.map(place=>{

   //we want to higlight the matched word
   const regex =new RegExp(this.value,'gi');
   const cityName= place.city.replace(regex, `<span class="hl">${this.value}</span>`);
      const stateName= place.state.replace(regex, `<span class="hl">${this.value}</span>`);
  	//returning the inner html which we want to show after the search matches

  	return `
  	<li>
  	<span class="name">${cityName},${stateName}</span>
  	<span class="population">${numberWithCommas(place.population)}</span>
  	</li>`;
  }).join('');
  suggestions.innerHTML= resultShow;
}
//get the elements
const searchInput = document.querySelector(".search");
const suggestions =document.querySelector('.suggestions');
//adding eventlisteners to the elements required
searchInput.addEventListener("change",displaymatches);
searchInput.addEventListener("keyup",displaymatches);