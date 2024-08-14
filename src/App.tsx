import { useState } from 'react';
import './App.css';
import { AuthForm } from './components/AuthForm/AuthForm';
import { RegistrationForm } from './components/RegistrationForm/RegistrationForm';
import ThemeButton from './components/ThemeButton';
import { HomePage } from './components/HomePage/HomePage';

function App() {
	const [isShowForm, setIsShowForm] = useState<boolean>(false); // Состояние изменения видимости формы авторизации/регистрации
	const [isAuth, setIsAuth] = useState<boolean>(false);

	const changeFormVisible = (value: boolean) => {
		setIsShowForm(value);
	};

	const changeIsAuth = (value: boolean) => {
		setIsAuth(value);
	};

	return (
		<>
			{isAuth === true ? (
				<HomePage />
			) : isShowForm === false ? (
				<AuthForm
					changeFormVisible={changeFormVisible}
					changeIsAuth={changeIsAuth}
				/>
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
