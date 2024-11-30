const express = require('express')
const router = express.Router();
const mongoose = require('mongoose');
const {saveUser, userImage, getUserProfile} = require('../controller/userController')
const fetchUser = require('../middleware/fetchUser.js')
const upload = require('../middleware/UploadImg.js')

router.post('/', fetchUser, saveUser);
router.get('/',fetchUser, getUserProfile)
router.post('/image', upload.single('user'), fetchUser, userImage);

module.exports = router