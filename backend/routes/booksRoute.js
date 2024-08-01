
import express from "express";
import { Book } from "../db/models/bookModel.js";
const router = express.Router();

router.post('/', async (req, res) => {
    try{
        if(!req.body.title || !req.body.author || !req.body.publishYear) {
            return res.status(400).send({
                message: "Send all the required fields!"
            })
        }
        const newBook = {
            title: req.body.title,
            author: req.body.author,
            publishYear: req.body.publishYear
        };
        const book = await Book.create(newBook);
        return res.status(201).send(book);
    } catch(e) {
        console.log(e.message);
        res.status(500).send({message: e.message})
    }
})

router.get('/', async (req, res) => {
    try {
        const books = await Book.find({});
        return res.status(200).json({
            count: books.length,
            data: books
        })
    } catch(e){
        console.log(e.message);
        res.status(500).send({message: e.message})
    }
})

router.get('/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const book = await Book.findById(id);
        return res.status(200).json(book)
    } catch(e){
        console.log(e.message);
        res.status(500).send({message: e.message})
    }
})

router.put('/:id', async (req, res) => {
    try {
        const id = req.params.id;
        if(!req.body.title || !req.body.author || !req.body.publishYear) {
            return res.status(400).send({
                message: "Send some data to update!"
            })
        }
        
        const updatedbook = await Book.findByIdAndUpdate(id, req.body);
        if(!updatedbook) {
            return res.status(404).send({
                message: "Book not found!"
            })
        }
        
        return res.status(200).json(updatedbook)
    } catch(e){
        console.log(e.message);
        res.status(500).send({message: e.message})
    }
})

router.delete('/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const book = await Book.findByIdAndDelete(id)
        if(!book) {
            return res.status(404).send({
                message: "Book not found!"
            })
        }
        
        return res.status(200).json(book)
    } catch(e){
        console.log(e.message);
        res.status(500).send({message: e.message})
    }
})

export default router