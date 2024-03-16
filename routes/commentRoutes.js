const express = require('express');
const router = express.Router();
const commentController = require('../controllers/commentController');

// Define routes for comments
router.post('/', commentController.createComment);
router.put('/:id', commentController.updateComment);
router.delete('/:id', commentController.deleteComment);

module.exports = router;
