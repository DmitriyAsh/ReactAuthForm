import {
	useMantineColorScheme,
	useComputedColorScheme,
	Button,
} from '@mantine/core';

const ThemeButton = () => {
	const { setColorScheme } = useMantineColorScheme();
	const computedColorScheme = useComputedColorScheme('light');

	const toggleColorScheme = () => {
		setColorScheme(computedColorScheme === 'dark' ? 'light' : 'dark');
	};

	return (
		<>
			<Button onClick={toggleColorScheme}>
				{computedColorScheme === 'dark' ? 'Light mode' : 'Dark mode'}
			</Button>
		</>
	);
};

export default ThemeButton;
