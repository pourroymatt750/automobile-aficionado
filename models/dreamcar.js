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

const dreamcarSchema = new Schema({
    make: String,
    model: String,
    year: String,
    reviews: [reviewSchema],
    owner: {type: Schema.Types.ObjectId, ref: 'Profile'}
}, {
    timestamps: true
})

const Dreamcar = mongoose.model('Dreamcar', dreamcarSchema)

export {
    Dreamcar
}