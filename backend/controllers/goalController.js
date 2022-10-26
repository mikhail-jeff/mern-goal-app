const asyncHandler = require('express-async-handler');

// * Get all goals
const getGoals = asyncHandler(async (req, res) => {
	res.status(200).json({ message: `Get goals...` });
});

// * Set goal
const setGoal = asyncHandler(async (req, res) => {
	if (!req.body.text) {
		res.status(400);
		throw new Error(`Please add a text field`);
	}

	res.status(200).json({ message: `Set goal...` });
});

// * Update goal
const updateGoal = asyncHandler(async (req, res) => {
	res.status(200).json({ message: `Update goal ${req.params.id}` });
});

// * Delete goal
const deleteGoal = asyncHandler(async (req, res) => {
	res.status(200).json({ message: `Delete goal ${req.params.id}` });
});

module.exports = {
	getGoals,
	setGoal,
	updateGoal,
	deleteGoal,
};
