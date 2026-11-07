const router = require('express').Router();

const upload = require('../config/multerConfig');

const { 
    createInterview, 
    getAllInterviews, 
    getInterviewById, 
    updateInterview, 
    deleteInterview 
} = require('../controllers/interviewController');

router.post('/', upload.single('file'), createInterview);
router.get('/', getAllInterviews);
router.get('/:id', getInterviewById);
router.put('/:id', upload.single('file'), updateInterview);
router.delete('/:id', deleteInterview);

module.exports = router;