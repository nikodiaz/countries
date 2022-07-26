import React from 'react';
import '../styles/Form.scss';

export default function Form({ change, changeRegion, search }) {
	return (
		<div className='form-container'>
			<div className='searchInput'>
				<span>
					<i className='bi bi-search'></i>
				</span>
				<input
					placeholder='Search for a country...'
					onChange={change}
					value={search}
				/>
			</div>
			<div style={{ display: 'flex' }}>
				<div className='form-filter-container'>
					<select
						defaultValue='Filter by a region'
						className='form-filter'
						onChange={changeRegion}
					>
						<option value=''>Filter by a region</option>
						<option value='Africa'>África</option>
						<option value='Americas'>América</option>
						<option value='Asia'>Asia</option>
						<option value='Europe'>Europa</option>
						<option value='Oceania'>Oceanía</option>
					</select>
					<div className='select-arrow'>
						<i className='bi bi-chevron-down'></i>
					</div>
				</div>
			</div>
		</div>
	);
}
