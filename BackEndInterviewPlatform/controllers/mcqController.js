const Mcq = require('../models/mcqModel');

// Create a new MCQ 
const createMcq = async (req, res) => {
    try {
        const { question, options, correctAnswer } = req.body;  

        const newMcq = new Mcq({
            question,
            options,
            correctAnswer
        }); 

        await newMcq.save();

        res.status(201).json({ message: 'MCQ created successfully', mcq: newMcq });
    }   
    catch (error) {
        console.error('Error creating MCQ:', error);
        res.status(500).json({ message: 'Server error' });
    }   
};

// Get all MCQs 

const getAllMcqs = async (req, res) => {
    try {
        const mcqs = await Mcq.find();  

        res.status(200).json(mcqs);
    }       
    catch (error) {
        console.error('Error fetching MCQs:', error);
        res.status(500).json({ message: 'Server error' });
    }   

}