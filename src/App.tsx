import { useState } from 'react';
import './App.css';
import { AuthForm } from './components/AuthForm/AuthForm';
import { RegistrationForm } from './components/RegistrationForm/RegistrationForm';
import ThemeButton from './components/ThemeButton';

function App() {
	const [isShowForm, setIsShowForm] = useState<boolean>(false); // Состояние изменения видимости формы авторизации/регистрации

	const changeFormVisible = (value: boolean) => {
		setIsShowForm(value);
	};

	return (
		<>
			{isShowForm === false ? (
				<AuthForm changeFormVisible={changeFormVisible} />
			) : (
				<RegistrationForm changeFormVisible={changeFormVisible} />
			)}
			<div className='button-position'>
				<ThemeButton />
			</div>
		</>
	);
}

export default App;
