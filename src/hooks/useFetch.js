import { useState, useEffect } from 'react';

export const useFetch = (url) => {
	const [data, setData] = useState(null);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(null);

	useEffect(() => {
		const getData = async (url) => {
			try {
				const res = await fetch(url);

				if (!res.ok) {
					throw {
						err: true,
						status: res.status,
						statusText: !res.statusText
							? 'Ocurrió un error'
							: res.statusText,
					};
				}
				const data = await res.json();
				setLoading(false);
				setData(data);
				setError({ err: false });
			} catch (err) {
				setLoading(true);
				setError(err);
			}
		};
		getData(url);
	}, [url]);

	return { data, loading, error, setData };
};
