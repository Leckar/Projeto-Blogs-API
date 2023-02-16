const express = require('express');
const { postController } = require('../controllers');
const tokenValidator = require('../middlewares/tokenValidator');

const router = express.Router();

router.get('/', tokenValidator, postController.getAllPosts);
router.post('/', tokenValidator, postController.postCreation);

module.exports = router;