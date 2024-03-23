
const express = require('express')
const app = express()
const cors = require('cors');
const OrderDataModal = require('../model/orderModal');
app.use(cors())

const router = express.Router();


router.post('/createOrder', async (req, res) => {
    const { userData, package } = req.body;

    try {
        const newDoc = new OrderDataModal({ status: 'pending', userData: userData, package: package });
        await newDoc.save();
        res.status(200).json(newDoc);

    } catch (error) {
        console.error('Error create account:', error);
        res.status(500).json({ error: 'Failed create account' });
    }
});

router.post('/getOrder', async (req, res) => {

    try {
        const newDoc = new OrderDataModal.find();
   
        res.status(200).json(newDoc);

    } catch (error) {
        console.error('Error data get:', error);
        res.status(500).json({ error: 'Failed data get' });
    }
});





module.exports = router
