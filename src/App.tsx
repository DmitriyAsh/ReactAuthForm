import './App.css';
import { LoginForm } from './components/LoginForm/LoginForm';
import ThemeButton from './components/ThemeButton';

function App() {
	return (
		<>
			<LoginForm />
			<div className='button-position'>
				<ThemeButton />
			</div>
		</>
	);
}

export default App;
