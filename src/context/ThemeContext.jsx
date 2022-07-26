import { createContext, useState } from 'react';

const ThemeContext = createContext('');
let initialTheme = localStorage.getItem('theme');

const ThemeProvider = ({ children }) => {
	const [theme, setTheme] = useState(initialTheme);

	const handleTheme = (e) => {
		if (e.target.value === 'dark') {
			setTheme('light');
			localStorage.setItem('theme', 'light');
		} else {
			setTheme('dark');
			localStorage.setItem('theme', 'dark');
		}
	};
	const data = { theme, handleTheme };

	return (
		<ThemeContext.Provider value={data}>{children}</ThemeContext.Provider>
	);
};

export { ThemeProvider };
export default ThemeContext;
