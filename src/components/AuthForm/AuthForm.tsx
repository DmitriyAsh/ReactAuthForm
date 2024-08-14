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
import { useForm } from '@mantine/form';
import axios from 'axios';

interface IChangeVisible {
	changeFormVisible: (value: boolean) => void;
	changeIsAuth: (value: boolean) => void;
}

export function AuthForm({ changeFormVisible, changeIsAuth }: IChangeVisible) {
	const handleChangeFormVisible = () => {
		changeFormVisible(true);
	};

	const handeChangeIsAuth = () => {
		changeIsAuth(true);
	};

	const form = useForm({
		mode: 'uncontrolled',
		initialValues: { password: '', email: '' },

		validate: {
			password: (value) =>
				value.length < 6
					? 'Password must have at least 6 letters'
					: null,
			email: (value) =>
				/^\S+@\S+$/.test(value) ? null : 'Invalid email',
		},
	});

	const userAuthorization = async (user: object) => {
		try {
			const res = await axios({
				url: 'http://20.205.178.13:8001/auth/login/',
				data: user,
				method: 'post',
			});
			console.log(res);
			handeChangeIsAuth();
		} catch (error) {
			console.log(error);
		}
	};

	return (
		<Container size={420} my={100}>
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
				<form
					onSubmit={form.onSubmit((values) => {
						userAuthorization(values);
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
					<Button fullWidth mt='xl' type='submit'>
						Sign in
					</Button>
				</form>
			</Paper>
		</Container>
	);
}
