const express = require("express");
const router = express.Router();
const Book = require("../model/Book");
const booksController = require("../controllers/books-controller");

//Route of the all books
router.get("/", booksController.getAllBooks);

//Route of the book by id
router.get("/:id", booksController.getBookById);

//Route for post one book
router.post("/", booksController.addBook);

//Route for the put on the book
router.put("/:id", booksController.updateBookById);

//Route for the delete the book
router.delete("/:id", booksController.deleteBookById);

module.exports = router;
