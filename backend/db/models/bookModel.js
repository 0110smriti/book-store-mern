import mongoose, { mongo } from "mongoose";

const bookSchema = mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    author: {
        type: String,
        required: true
    },
    publishYear: {
        required: true,
        type: Number
    },
}, {
    timestamps: true
})

export const Book = mongoose.model('Book', bookSchema )