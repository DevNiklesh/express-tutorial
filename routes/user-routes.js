const express = require('express');
const router = express.Router();
const userController = require('../controllers/user-controller');


router.get('/', (req, res) => {
    res.send('This is user root route');
});

router.get('/:id', userController.getUserById);

module.exports = router;