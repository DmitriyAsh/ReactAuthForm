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
				{computedColorScheme === 'dark'
					? 'Включить светлую тему'
					: 'Включить темную тему'}
			</Button>
		</>
	);
};

export default ThemeButton;
