// controllers/commentController.js

const Comment = require('../models/Comment');

// Controller functions
const createComment = async (req, res) => {
    const comment = new Comment({
        postId: req.body.postId,
        content: req.body.content,
        author: req.body.author,
    });

    try {
        const newComment = await comment.save();
        res.status(201).json(newComment);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

const updateComment = async (req, res) => {
    try {
        const comment = await Comment.findById(req.params.id);
        if (comment == null) {
            return res.status(404).json({ message: 'Comment not found' });
        }
        if (req.body.content != null) {
            comment.content = req.body.content;
        }
        const updatedComment = await comment.save();
        res.json(updatedComment);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

const deleteComment = async (req, res) => {
    try {
        const comment = await Comment.findById(req.params.id);
        if (comment == null) {
            return res.status(404).json({ message: 'Comment not found' });
        }
        await comment.remove();
        res.json({ message: 'Comment deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

module.exports = {
    createComment,
    updateComment,
    deleteComment,
};
