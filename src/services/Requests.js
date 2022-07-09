const getAllCountries = async (state) => {
	const res = await fetch('https://restcountries.com/v3.1/all');
	const data = await res.json();
	state(data);
};

const getCountriesByName = async (state, name) => {
	const res = await fetch(`https://restcountries.com/v3.1/name/${name}`);
	const data = await res.json();
	state(data);
};

const getCountriesByRegion = async (state, region) => {
	const res = await fetch(`https://restcountries.com/v3.1/region/${region}`);
	const data = await res.json();
	state(data);
};

export { getAllCountries, getCountriesByName, getCountriesByRegion };
