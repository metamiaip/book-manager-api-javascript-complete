const express = require('express');
const {booksController} = require('../controllers');

const router = new express.Router();

router.get('/books', booksController.getBooks);

router.get('/books/:bookId', booksController.getBook);

router.post('/books', booksController.saveBook);

// User Story 4 - Update Book By Id Solution
router.put('/books/:bookId', booksController.updateBook);

module.exports = router;
