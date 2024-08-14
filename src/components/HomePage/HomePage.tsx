import { Title } from '@mantine/core';
import classes from './HomePage.module.css';

export function HomePage() {
	return (
		<>
			<Title ta='center' mt={100} className={classes.title}>
				You have logged in!
			</Title>
		</>
	);
}
