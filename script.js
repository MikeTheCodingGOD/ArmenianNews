// const options = {
// 	method: 'GET',
// 	headers: {
// 		'X-RapidAPI-Key': '37508144-496c-4af1-b3b4-4dd118b9b5d8',
// 		'X-RapidAPI-Host': 'dark-sky.p.rapidapi.com'
// 	}
// };

const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '68d573880fmshbf17047ab4e2704p14d3aejsn658d539ed8f3',
		'X-RapidAPI-Host': 'open-weather13.p.rapidapi.com'
	}
};

fetch('https://open-weather13.p.rapidapi.com/city/fivedaysforcast/30.438/-89.1028', options)
	.then(response => response.json())
	.then(response => console.log(response))
	.catch(err => console.error(err));