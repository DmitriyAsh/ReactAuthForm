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
import { matchesField, useForm } from '@mantine/form';
import classes from './RegistrationForm.module.css';
import axios from 'axios';

export interface IChangeVisible {
	changeFormVisible: (value: boolean) => void;
}

export function RegistrationForm({ changeFormVisible }: IChangeVisible) {
	const handleChangeFormVisible = () => {
		changeFormVisible(false);
	};

	const form = useForm({
		mode: 'uncontrolled',
		initialValues: { password: '', email: '', repeat_password: '' },

		validate: {
			password: (value) =>
				value.length < 6
					? 'Password must have at least 6 letters'
					: null,
			repeat_password: matchesField(
				'password',
				'Password are not the same'
			),
			email: (value) =>
				/^\S+@\S+$/.test(value) ? null : 'Invalid email',
		},
	});

	const userRegistration = async (user: object) => {
		await axios
			.post('http://20.205.178.13:8001/registration/', user)
			.then((resp) => console.log(resp))
			.catch((err) => console.log(err));
	};

	return (
		<Container size={420} my={400}>
			<Title ta='center' className={classes.title}>
				Create an account
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
				<form
					onSubmit={form.onSubmit((values) => {
						userRegistration(values);
					})}
				>
					<TextInput
						label='Email'
						placeholder='example@mail.ru'
						required
						key={form.key('email')}
						{...form.getInputProps('email')}
					/>
					<PasswordInput
						label='Password'
						placeholder='Your password'
						required
						mt='md'
						key={form.key('password')}
						{...form.getInputProps('password')}
					/>
					<PasswordInput
						label='Repeat password'
						placeholder='Repeat your password'
						required
						mt='md'
						key={form.key('repeat_password')}
						{...form.getInputProps('repeat_password')}
					/>
					<Button fullWidth mt='xl' type='submit'>
						Sign up
					</Button>
				</form>
			</Paper>
		</Container>
	);
}
