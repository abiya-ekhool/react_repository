const express = require('express');
const router = express.Router();
const controller = require('../config/controllers/user');

router.post('/createUser', controller.createUser);
router.get('/getUsers', controller.getUsers);
router.post('/deleteUser', controller.deleteUser);

module.exports = router;

