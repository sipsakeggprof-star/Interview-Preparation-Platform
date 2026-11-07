const theoryQController = require('../controllers/theoryQController');

const router = require('express').Router(); 

const createTheoryQ = async (req, res) => {
    try {
        const { question, options, correctAnswer } = req.body;  
        
                const newTheoryQ = new Mcq({
                    question,
                    options,
                    correctAnswer
                });
        await newTheoryQ.save();

        res.status(201).json({ message: 'Theory question created successfully', theoryQ: newTheoryQ });
    } catch (error) {
        res.status(500).json({ message: 'Error creating theory question', error: error.message });
    }   
};

const getAllTheoryQs = async (req, res) => {
    try {
        const theoryQs = await theoryQController.getAllTheoryQs();  

        res.status(200).json(theoryQs);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching theory questions', error: error.message });
    }   
};

const getTheoryQById = async (req, res) => {
    try {
        const theoryQ = await theoryQController.getTheoryQById(req.params.id);

        if (!theoryQ) {
            return res.status(404).json({ message: 'Theory question not found' });
        }   
        res.status(200).json(theoryQ);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching theory question', error: error.message });
    }   
};

const updateTheoryQ = async (req, res) => {
    try {
        const updatedTheoryQ = await theoryQController.updateTheoryQ(req.params.id, req.body);  

        if (!updatedTheoryQ) {
            return res.status(404).json({ message: 'Theory question not found' });
        }   
        res.status(200).json(updatedTheoryQ);
    }
    catch (error) {
        res.status(500).json({ message: 'Error updating theory question', error: error.message });
    }   
};

const deleteTheoryQ = async (req, res) => {
    try {
        const deletedTheoryQ = await theoryQController.deleteTheoryQ(req.params.id);    

        if (!deletedTheoryQ) {
            return res.status(404).json({ message: 'Theory question not found' });
        }   
        res.status(200).json({ message: 'Theory question deleted successfully' });
    }   
    catch (error) {
        res.status(500).json({ message: 'Error deleting theory question', error: error.message });
    }
};  




router.post('/', theoryQController.createTheoryQ);
router.get('/', theoryQController.getAllTheoryQs);
router.get('/:id', theoryQController.getTheoryQById);
router.put('/:id', theoryQController.updateTheoryQ);
router.delete('/:id', theoryQController.deleteTheoryQ);

module.exports = router;    