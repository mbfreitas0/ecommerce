const Book = require("../model/Book");

//Controller do getAllBoks
const getAllBooks = async (req, res, next) => {
  let books;
  try {
    books = await Book.find();
  } catch (err) {
    console.log(err);
  }

  if (!books) {
    return res.status(404).json({ message: "Not products found ..." });
  }
  return res.status(200).json({ books });
};

//Controller addBook
const addBook = async (req, res, next) => {
  const { name, author, description, price, available } = req.body;
  let book;

  try {
    book = new Book({
      name,
      author,
      description,
      price,
      available,
    });
    await book.save();
  } catch (error) {
    console.log(err);
  }

  if (!book) {
    return res.status(500).json({ message: "Unable to Add" });
  }
  return res.status(201).json({ book });
};

//Controller getBookById
const getBookById = async (req, res, next) => {
  const id = req.params.id;
  let book;
  try {
    book = await Book.findById(id);
  } catch (err) {
    console.log(err);
  }

  if (!book) {
    return res.status(404).json({ message: "Not book found ..." });
  }
  return res.status(200).json({ book });
};

//Controller updateBookById
const updateBookById = async (req, res, next) => {
  const id = req.params.id;
  const { name, author, description, price, available } = req.body;
  let book;
  try {
    book = await Book.findByIdAndUpdate(id, {
      name,
      author,
      description,
      price,
      available,
    });

    book = await book.save();
  } catch (err) {
    console.log(err);
  }

  if (!book) {
    return res.status(404).json({ message: "Unable to update by this ID ..." });
  }
  return res.status(200).json({ book });
};

//Controller deleteBookById
const deleteBookById = async (req, res, next) => {
  const id = req.params.id;
  let book;
  try {
    book = await Book.findByIdAndRemove(id);
  } catch (err) {
    console.log(err);
  }

  if (!book) {
    return res
      .status(404)
      .json({ message: "Unable to delete book by this ID ..." });
  }
  return res.status(200).json({ book });
};

exports.getAllBooks = getAllBooks;
exports.addBook = addBook;
exports.getBookById = getBookById;
exports.updateBookById = updateBookById;
exports.deleteBookById = deleteBookById;
