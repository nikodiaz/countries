import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getCountriesByName } from '../services/Requests';
import Header from './Header';
import '../styles/CountryDetails.scss';

export default function CountryDetail() {
	const [country, setCountry] = useState(null);
	const params = useParams();

	useEffect(() => {
		getCountriesByName(setCountry, params.name);
	}, [params.name]);

	let curr, langs, natName;

	if (country !== null) {
		// ** Currencies **
		curr =
			country[0].currencies[
				Object.getOwnPropertyNames(country[0].currencies)
			];
		// ** Languages **
		langs = Object.values(country[0].languages);
		// ** Native Name **
		natName =
			country[0].name.nativeName[
				Object.keys(country[0].name.nativeName)[0]
			].official;
	}
	return (
		<>
			<Header />
			{country !== null ? (
				<div className='main-container'>
					<a className='back-btn' href='/'>
						<i className='bi bi-arrow-left'></i>Back
					</a>
					<div className='details-container'>
						<div className='img-container'>
							<img
								src={country[0].flags.svg}
								alt={`Flag of ${country[0].name.common}`}
							/>
						</div>
						<div>
							<h2>{country[0].name.common}</h2>
							<div className='details-description'>
								<div className='desc-left'>
									<p>
										<span>Native Name: </span>
										{natName}
									</p>
									<p>
										<span>Population: </span>
										{country[0].population}
									</p>
									<p>
										<span>Region: </span>
										{country[0].region}
									</p>
									<p>
										<span>Sub Region: </span>
										{country[0].subregion}
									</p>
									<p>
										<span>Capital: </span>
										{country[0].capital}
									</p>
								</div>
								<div className='desc-right'>
									<p>
										<span>Top Level Domain: </span>
										{country[0].tld}
									</p>
									<p>
										<span>Currencies: </span>
										{curr.name}
									</p>
									<p>
										<span>Languages: </span>
										{langs.join(', ')}
									</p>
								</div>
							</div>
							<div className='borders'>
								Border Countries:{' '}
								{country[0].borders ? (
									country[0].borders.map((border) => (
										<div
											key={border}
											className='border-div'
										>
											<p>{border}</p>
										</div>
									))
								) : (
									<p>No Borders...</p>
								)}
							</div>
						</div>
					</div>
				</div>
			) : (
				<h1>Loading...</h1>
			)}
		</>
	);
}
