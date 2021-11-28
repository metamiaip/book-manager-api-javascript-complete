const express = require('express');
const {booksController} = require('../controllers');

const router = new express.Router();

/**
 * @swagger
 * components:
 *  schemas:
 *      Book:
 *          type: object
 *          required:
 *              - title
 *              - author
 *          properties:
 *              id:
 *                  type: integer
 *                  description: The auto-generated id of the book
 *              title:
 *                  type: string
 *                  description: The book title
 *              author:
 *                  type: string
 *                  description: The book author
*/

/**
 * @swagger
 * /api/v1/books:
 *  get:
 *      summary: Get all books
 *      responses:
 *          200:
 *              description: An array of books 
*/
router.get('/books', booksController.getBooks);

/**
 * @swagger
 * /api/v1/books/{bookId}:
 *  get:
 *      summary: Get a single book by book id
 *      description: Retrieve a single book.
 *      parameters:
 *          -   in: path
 *              name: bookId
 *              schema:
 *                  type: integer
 *              required: true
 *              description: Numeric ID of the book to retrieve
 *      responses:
 *          200:
 *              description: The book description
 *              content:
 *                  applications/json:
 *                      schema:
 *                          $ref: '#/components/schemas/Book'
 *          404:
 *              description: Not found
*/
router.get('/books/:bookId', booksController.getBook);

/**
 * @swagger
 * /api/v1/books:
 *  post:
 *      summary: Create a book
 *      requestBody:
 *          required: true
 *          content:
 *              application/json:
 *                  schema:
 *                      $ref: '#/components/schemas/Book'
 *      responses:
 *          201:
 *              description: book created
 *              content:
 *                  application/json:
 *                      schema:
 *                          $ref: '#/components/schemas/Book'
*/
router.post('/books', booksController.saveBook);

/**
 * @swagger
 * /api/v1/books/{bookId}:
 *  put:
 *      summary: update a book by id
 *      parameters:
 *          -   in: path
 *              name: bookId
 *              schema:
 *                  type: integer
 *              required: true
 *              description: The book id
 *      requestBody:
 *          required: true
 *          content:
 *              application/json:
 *                  schema:
 *                      $ref: '#/components/schemas/Book'
 *      responses:
 *          204:
 *              description: book updated
 *              content:
 *                  application/json:
 *                      schema:
 *                          $ref: '#/components/schemas/Book'
*/
// User Story 4 - Update Book By Id Solution
router.put('/books/:bookId', booksController.updateBook);

module.exports = router;
