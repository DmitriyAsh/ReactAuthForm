import { TextInput, Paper, Title, Container, Button } from '@mantine/core';
import { useForm } from '@mantine/form';
import classes from '../RegistrationForm/RegistrationForm.module.css';
import axios from 'axios';

interface IProps {
	handleChangeFormVisible: () => void;
}

export function ConfirmRegistrationForm({ handleChangeFormVisible }: IProps) {
	const form = useForm({
		mode: 'uncontrolled',
		initialValues: { confirmation_code: '' },

		validate: {
			confirmation_code: (value) =>
				value.length < 1 ? 'Field can not be empty' : null,
		},
	});

	const confirmRegistration = async (confirmation_code: string) => {
		try {
			const response = await axios({
				url: `http://20.205.178.13:8001/registration/${confirmation_code}`,
				method: 'patch',
			});
			console.log(response);
			handleChangeFormVisible();
		} catch (error) {
			console.log(error);
		}
	};

	return (
		<Container size={420} my={100}>
			<Title ta='center' className={classes.title}>
				Please, check your confirmation code in your email
			</Title>
			<Paper withBorder shadow='md' p={30} mt={30} radius='md'>
				<form
					onSubmit={form.onSubmit((values) => {
						confirmRegistration(values.confirmation_code);
					})}
				>
					<TextInput
						label='Confirmation code'
						placeholder='Your code'
						required
						key={form.key('confirmation_code')}
						{...form.getInputProps('confirmation_code')}
					/>
					<Button fullWidth mt='xl' type='submit'>
						Confirm
					</Button>
				</form>
			</Paper>
		</Container>
	);
}
