const mongoose = require('mongoose');

const theoryQSchema = new mongoose.Schema({
    question: {
        type: String,

        required: true,
        trim: true
    },
    Subject: {
        type: String,
        required: true,
        trim: true
    },
    answer: {
        type: String,
        required: true,
        trim: true
    },
    explanation: {
        type: String,
        default: ''
    },
    difficulty: {
        type: [String],
        enum: ['easy', 'medium', 'hard'],
        default: 'easy'
    },
    marks: {
        type: Number,
        required: true,
        min: 0.5,
        max:5,
        enum : [0.5, 1, 1.5, 2,2.5, 3,3.5, 4,4.5, 5]
    },
    tags: {
        type: [String],
        default: []
    }
},
    { timestamps: true });

module.exports = mongoose.model('TheoryQ', theoryQSchema);