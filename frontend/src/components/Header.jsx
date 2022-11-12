import React from 'react';
import { FaSignInAlt, FaSignOutAlt, FaUser } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { logout, reset } from '../features/auth/authSlice';

const Header = () => {
	const navigate = useNavigate();
	const dispatch = useDispatch();
	const { user } = useSelector((state) => state.auth);

	const onLogout = () => {
		dispatch(logout());
		dispatch(reset());
		navigate('/');
	};

	return (
		<header className='header'>
			<div className='logo'>
				<Link to='/'>GOALS</Link>
			</div>
			<ul>
				{user ? (
					<li>
						<button
							className='btn'
							onClick={onLogout}
						>
							<FaSignOutAlt className='blue' /> Logout
						</button>
					</li>
				) : (
					<>
						<li>
							<Link to='/login'>
								<FaSignInAlt className='blue' /> Login
							</Link>
						</li>
						<li>
							<Link to='/register'>
								<FaUser className='blue' /> Register
							</Link>
						</li>
					</>
				)}
			</ul>
		</header>
	);
};

export default Header;
