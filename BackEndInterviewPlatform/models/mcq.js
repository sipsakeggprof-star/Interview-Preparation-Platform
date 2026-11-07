const mongoose = require('mongoose');

const mcqSchema = new mongoose.Schema({
    question: {
        type: String,   
        required: true,
        trim: true
    },
    options: {
        type: [String], 
        validate: v => vlength >= 2,
        required: true
    },
    correctAnswer: {
        type: Number,
        required: true,
        min: 0,
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
    tags: {
        type: [String],
        default: []
    }
},
    { timestamps: true });

module.exports = mongoose.model('MCQ', mcqSchema);