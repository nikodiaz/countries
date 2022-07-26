import { useParams, Link } from 'react-router-dom';
import { useFetch } from '../hooks/useFetch';
import '../styles/CountryDetails.scss';

export default function CountryDetail() {
	const { name } = useParams();
	const { data, loading } = useFetch(
		`https://restcountries.com/v3.1/name/${name}`,
	);

	let curr, langs, natName;

	if (loading === false) {
		// ** Currencies **
		curr = Array(Object.values(data[0].currencies));
		// ** Languages **
		langs = Object.values(data[0].languages);
		// ** Native Name **
		natName =
			data[0].name.nativeName[Object.keys(data[0].name.nativeName)[0]]
				.official;
	}
	return (
		<>
			{loading === false ? (
				<div className='main-container'>
					<Link className='back-btn' to='/'>
						<i className='bi bi-arrow-left'></i>Back
					</Link>
					<div className='details-container'>
						<div className='img-container'>
							<img
								src={data[0].flags.svg}
								alt={`Flag of ${data[0].name.common}`}
							/>
						</div>
						<div>
							<h2>{data[0].name.common}</h2>
							<div className='details-description'>
								<div className='desc-left'>
									<p>
										<span>Native Name: </span>
										{natName}
									</p>
									<p>
										<span>Population: </span>
										{data[0].population.toLocaleString()}
									</p>
									<p>
										<span>Region: </span>
										{data[0].region}
									</p>
									<p>
										<span>Sub Region: </span>
										{data[0].subregion}
									</p>
									<p>
										<span>Capital: </span>
										{data[0].capital}
									</p>
								</div>
								<div className='desc-right'>
									<p>
										<span>Top Level Domain: </span>
										{data[0].tld}
									</p>
									<p>
										<span>Currencies: </span>
										{Object.values(
											curr[0].map((c) => c.name),
										).join(', ')}
									</p>
									<p>
										<span>Languages: </span>
										{langs.join(', ')}
									</p>
								</div>
							</div>
							<div className='borders'>
								<span className='borders-span'>
									Border Countries:{' '}
								</span>{' '}
								{data[0].borders ? (
									data[0].borders.map((border) => (
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
