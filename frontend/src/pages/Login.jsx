import { useState, useEffect } from 'react';
import { FaSignInAlt } from 'react-icons/fa';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { login, reset } from '../features/auth/authSlice';
import Spinner from '../components/Spinner';

const Login = () => {
	const [formData, setFormData] = useState({
		email: '',
		password: '',
	});

	const { email, password } = formData;

	const navigate = useNavigate();
	const dispatch = useDispatch();

	const { user, isLoading, isError, isSuccess, message } = useSelector((state) => state.auth);

	useEffect(() => {
		if (isError) {
			toast.error(message);
		}

		if (isSuccess || user) {
			navigate('/');
		}

		dispatch(reset());
	}, [user, isError, isSuccess, message, navigate, dispatch]);

	const onChange = (e) => {
		setFormData((prevState) => ({
			...prevState,
			[e.target.name]: e.target.value,
		}));
	};

	const onSubmit = (e) => {
		e.preventDefault();

		const userData = {
			email,
			password,
		};

		dispatch(login(userData));
	};

	if (isLoading) {
		return <Spinner />;
	}

	return (
		<>
			<section className='heading'>
				<h1>
					<FaSignInAlt className='blue' /> Login
				</h1>
				<p>Login and start setting your goals</p>
			</section>

			<section className='form'>
				<form onSubmit={onSubmit}>
					<div className='form-group'>
						<input
							className='form-control'
							type='email'
							name='email'
							id='email'
							value={email}
							placeholder='Enter your email'
							onChange={onChange}
						/>
					</div>
					<div className='form-group'>
						<input
							className='form-control'
							type='password'
							name='password'
							id='password'
							value={password}
							placeholder='Enter your password'
							onChange={onChange}
						/>
					</div>
					<div className='form-group'>
						<button
							className='btn btn-block'
							type='submit'
						>
							Login
						</button>
					</div>
				</form>
			</section>
		</>
	);
};

export default Login;
