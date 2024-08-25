const Book = require('../models/bookModel');
const mongoose = require('mongoose');

//get all books
const getBooks = async(req,res) =>{
    try{
        const books = await Book.find({})
        return res.status(200).json(books);
    }
    catch (error){
        return res.status(500).json({"error": error});
    }
}

//get a single book

const getBook = async(req, res) =>{
    try{
        const _id = req.params.id;
        const book = await Book.findOne({_id});
        if(!book){
            return res.status(500).json({});

        }
        else{
        return res.status(200).json(book)}
    }
    catch (error){
        return res.status(500).json({"error": error});
    }

}

//create a new book
const createBook = async(req,res) =>{
    try{
        const book = await Book.create({title, author, publication_date, genre, isbn})
        return res.status(200).json(book);
    }
    catch(error){
        return res.status(500).json({"error": error});
    }

}
//update a book
const updateBook = async(req,res) =>{
    try{
        const _id = req.params.id;
        const {title} = req.body;
        const book = await Book.findOne({_id});

        if(!book){
            return res.status(400).json({"error": error});
        }
        else{
            res.json(book);
        }
    }
    catch(error){
        return res.status(404).json({"error": error});
    }
}
//delete a book
const deleteBook = async(req,res) =>{
    try{
        const _id = req.params.id;
        const book = await Book.deleteOne({_id})
        if(anime.deletedCount == 0){
            return res.status(400).error()
        }
        else{
            return res.status(200).json()
        }
    }
    catch(error){
        res.status(400).json({"error":error})
    }
}


module.exports = {getBooks, getBook, createBook, updateBook, deleteBook};

