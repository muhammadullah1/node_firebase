const express = require('express');
const router = express.Router();
const { getUsers, createUser, updateUser, deleteUser } = require('../controllers/user.controller');

router.get('/', getUsers);
router.post('/', createUser);
router.post('/', updateUser);
router.post('/', deleteUser);

module.exports = router;
