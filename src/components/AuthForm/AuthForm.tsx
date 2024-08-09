import {
	TextInput,
	PasswordInput,
	Anchor,
	Paper,
	Title,
	Text,
	Container,
	Button,
} from '@mantine/core';
import classes from './AuthForm.module.css';
import { IChangeVisible } from '../RegistrationForm/RegistrationForm';

export function AuthForm({ changeFormVisible }: IChangeVisible) {
	const handleChangeFormVisible = () => {
		changeFormVisible(true);
	};
	return (
		<Container size={420} my={400}>
			<Title ta='center' className={classes.title}>
				Welcome back!
			</Title>
			<Text c='dimmed' size='sm' ta='center' mt={5}>
				Do not have an account yet?{' '}
				<Anchor
					size='sm'
					component='button'
					onClick={handleChangeFormVisible}
				>
					Create account
				</Anchor>
			</Text>

			<Paper withBorder shadow='md' p={30} mt={30} radius='md'>
				<TextInput
					label='Email'
					placeholder='example@mail.ru'
					required
				/>
				<PasswordInput
					label='Password'
					placeholder='Your password'
					required
					mt='md'
				/>
				<Button fullWidth mt='xl'>
					Sign in
				</Button>
			</Paper>
		</Container>
	);
}
