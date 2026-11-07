const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const UserLog = require('../models/userLog');

const register = async (req, res) => {
    const { name, surname, email, username, phoneNumber, password } = req.body;

    try {
        const existingUser = await UserLog.findOne({ email });  

        if (existingUser) {
            return res.status(400).json({ message: 'User already exists' });
        }   

        const hashedPassword = await bcrypt.hash(password, 10);

        const newUser = new UserLog({
            name,
            surname,
            email,
            username: 
            phoneNumber,
            password: hashedPassword
        }); 

        await newUser.save();

        const token = jwt.sign({ id: newUser._id }, process.env.JWT_SECRET, { expiresIn: '1h' });

        res.status(201).json({ token, user: newUser });
    }   
    catch (error) {
        console.error('Error during registration:', error);
        res.status(500).json({ message: 'Server error' });
    }
};

const login = async (req, res) => {
    const { email, password } = req.body;   

    try {
        const user = await UserLog.findOne({ email });

        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }   

        const isPasswordValid = await bcrypt.compare(password, user.password);

        if (!isPasswordValid) {
            return res.status(400).json({ message: 'Invalid credentials' });
        }   

        const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '1h' });

        res.status(200).json({ token, user });
    }   

    catch (error) {
        console.error('Error during login:', error);
        res.status(500).json({ message: 'Server error' });
    }   

};

module.exports = { register, login };