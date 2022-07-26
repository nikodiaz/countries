import { useState } from 'react';
import { Link } from 'react-router-dom';
import CountryItem from '../components/CountryItem';
import Form from '../components/Form';
import { useFetch } from '../hooks/useFetch';
import '../styles/Home.scss';

const Home = () => {
	//estado de los filtros
	const [region, setRegion] = useState('');
	const [search, setSearch] = useState('');
	//peticiones
	let url = 'https://restcountries.com/v3.1/all';
	if (region === '' || region === undefined || region === null) {
		url = 'https://restcountries.com/v3.1/all';
	} else {
		url = `https://restcountries.com/v3.1/region/${region}`;
	}
	const { data, loading } = useFetch(url);

	//filtro de búsqueda
	const filterSearch = (e) => {
		setSearch(e.target.value);
		url = `https://restcountries.com/v3.1/name/${search}`;
	};
	//método de filtrado
	const results = !search
		? data
		: data.filter((country) =>
				country.name.common
					.toLowerCase()
					.includes(search.toLowerCase()),
		  );

	let message = <h1>No se encontraron resultados</h1>;

	//Filtrar por region
	const handleChangeRegion = (e) => {
		setRegion(e.target.value);
	};

	return (
		<>
			<Form
				change={filterSearch}
				changeRegion={handleChangeRegion}
				search={search}
			/>
			<div className='countries-container'>
				{loading === false ? (
					results.length === 0 ? (
						message
					) : (
						results.map((country) => (
							<Link
								to={`country/${String(
									country.name.common,
								).toLowerCase()}`}
								key={country.name.common}
							>
								<CountryItem country={country} />
							</Link>
						))
					)
				) : (
					<h1>Loading countries...</h1>
				)}
			</div>
		</>
	);
};

export default Home;
