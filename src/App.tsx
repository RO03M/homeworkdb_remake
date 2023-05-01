import RoutesContainer from './routes/routes';
import { ThemeProvider } from '@emotion/react';
import { Box, createTheme } from '@mui/material';
import NavBar from './components/NavBar';

function App() {

	const theme = createTheme();

	return (
		<ThemeProvider
			theme={theme}
		>
			<Box>
				<NavBar/>
				<RoutesContainer/>
			</Box>
		</ThemeProvider>
	);
}

export default App;
