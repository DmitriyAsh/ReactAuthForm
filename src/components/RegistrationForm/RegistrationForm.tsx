import {
	TextInput,
	PasswordInput,
	Paper,
	Title,
	Container,
	Button,
	Text,
	Anchor,
} from '@mantine/core';
import classes from './RegistrationForm.module.css';

export interface IChangeVisible {
	changeFormVisible: (value: boolean) => void;
}

export function RegistrationForm({ changeFormVisible }: IChangeVisible) {
	const handleChangeFormVisible = () => {
		changeFormVisible(false);
	};

	return (
		<Container size={420} my={400}>
			<Title ta='center' className={classes.title}>
				Fill out the registration form.
			</Title>
			<Text c='dimmed' size='sm' ta='center' mt={5}>
				Do you have an account?{' '}
				<Anchor
					size='sm'
					component='button'
					onClick={handleChangeFormVisible}
				>
					Get back
				</Anchor>
			</Text>
			<Paper withBorder shadow='md' p={30} mt={30} radius='md'>
				<TextInput
					label='Email'
					placeholder='you@mantine.dev'
					required
				/>
				<PasswordInput
					label='Password'
					placeholder='Your password'
					required
					mt='md'
				/>
				<Button fullWidth mt='xl'>
					Sign up
				</Button>
			</Paper>
		</Container>
	);
}
