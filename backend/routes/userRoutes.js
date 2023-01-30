const express = require('express');
const {registerUser, loginUser, getMe} = require('../controllers/userController');
const {protect} = require('../middleware/authMiddleware');

// const {protect} = require('../middleware/authMiddleware');

const router = express.Router();

// register
router.post('/', registerUser)
router.post('/login', loginUser)
router.get('/me', protect, getMe)


module.exports = router;