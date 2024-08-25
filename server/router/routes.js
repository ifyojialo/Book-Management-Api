const express = require('express');
const { getBook, getBooks, createBook, updateBook, deleteBook } = require('../controllers/bookController');
const router = express.Router();

//get all books
router.get('/books', getBooks)

//get a single book
router.get('/books/:id', getBook)

//create or add a book
router.post('/books', createBook)

//update a book
router.put('/books/:id', updateBook)

//delete a book
router.delete('/books/:id', deleteBook)


module.exports = router;
