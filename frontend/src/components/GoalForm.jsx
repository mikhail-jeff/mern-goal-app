import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { createGoal } from '../features/goals/goalSlice';

const GoalForm = () => {
	const [text, setText] = useState('');

	const dispatch = useDispatch();

	const onSubmit = (e) => {
		e.preventDefault();

		dispatch(createGoal({ text }));
		setText('');
	};

	return (
		<section className='form'>
			<form onSubmit={onSubmit}>
				<div className='form-group'>
					<input
						value={text}
						onChange={(e) => setText(e.target.value)}
						type='text'
						name='text'
						id='text'
						placeholder='Enter your goal'
					/>
				</div>
				<div className='form-group'>
					<button
						className='btn btn-block'
						type='submit'
					>
						Add Goal
					</button>
				</div>
			</form>
		</section>
	);
};

export default GoalForm;
