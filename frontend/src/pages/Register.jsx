import { useState, useEffect } from 'react';
import { FaUser } from 'react-icons/fa';

const Register = () => {
	const [formData, setFormData] = useState({
		name: '',
		email: '',
		password: '',
		password2: '',
	});

	const { name, email, password, password2 } = formData;

	const onChange = (e) => {
		setFormData((prevState) => ({
			...prevState,
			[e.target.name]: e.target.value,
		}));
	};

	const onSubmit = (e) => {
		e.preventDefault();
	};

	return (
		<>
			<section className='heading'>
				<h1>
					<FaUser /> Register
				</h1>
				<p>Create an account</p>
			</section>

			<section className='form'>
				<form onSubmit={onSubmit}>
					<div className='form-group'>
						<input className='form-control' type='text' name='name' id='name' value={name} placeholder='Enter your name' onChange={onChange} />
					</div>
					<div className='form-group'>
						<input className='form-control' type='email' name='email' id='email' value={email} placeholder='Enter your email' onChange={onChange} />
					</div>
					<div className='form-group'>
						<input className='form-control' type='password' name='password' id='password' value={password} placeholder='Enter your password' onChange={onChange} />
					</div>
					<div className='form-group'>
						<input className='form-control' type='password' name='password2' id='password2' value={password2} placeholder='Confirm password' onChange={onChange} />
					</div>
					<div className='form-group'>
						<button className='btn btn-block' type='submit'>
							Register
						</button>
					</div>
				</form>
			</section>
		</>
	);
};

export default Register;
