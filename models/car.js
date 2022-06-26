import mongoose from "mongoose"

const Schema = mongoose.Schema

const reviewSchema = new Schema({
    rating: {
        type: Number,
        min: 1,
        max: 5
    },
    content: {
        type: String,
        required: true
    }
}, {
    timestamps: true
})

const carSchema = new Schema({
    make: String,
    model: String,
    year: Number,
    reviews: [reviewSchema]
}, {
    timestamps: true
})