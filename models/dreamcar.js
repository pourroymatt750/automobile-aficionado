import mongoose from "mongoose"

const Schema = mongoose.Schema

const dreamcarSchema = new Schema({
    make: String,
    model: String,
    year: String
}, {
    timestamps: true
})

const Dreamcar = mongoose.model('Dreamcar', dreamcarSchema)

export {
    Dreamcar
}