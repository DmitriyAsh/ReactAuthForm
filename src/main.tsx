import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import { MantineProvider } from '@mantine/core';
import '@mantine/core/styles.css';
import { Notifications } from '@mantine/notifications';

ReactDOM.createRoot(document.getElementById('root')!).render(
	<MantineProvider defaultColorScheme='dark'>
		<React.StrictMode>
			<Notifications position='bottom-right' />
			<App />
		</React.StrictMode>
	</MantineProvider>
);
