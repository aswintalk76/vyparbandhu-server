
const express = require('express')
const app = express()
const cors = require('cors');
const ExpertCallModal = require('../model/exportCallModal');
const ConatctUsCallModal = require('../model/contactusModal');
const HomepageModal = require('../model/homepageModal');
app.use(cors())

const router = express.Router();


router.post('/creat', async (req, res) => {


    try {


        const newDoc = new HomepageModal({
            sliderImage: [{ image: " " }],
            services:
            {
                heading: "Our Most Popular Services",
                data: [
                    {
                        name: "",
                        details: ""
                    },
                    {
                        name: "",
                        details: ""
                    },
                    {
                        name: "",
                        details: ""
                    },
                    {
                        name: "",
                        details: ""
                    },
                    {
                        name: "",
                        details: ""
                    },
                    {
                        name: "",
                        details: ""
                    },
                ]
            },
            workFlow: {
                heading: "Our Work Flow",
                data: [
                    {
                        name: "",
                    },
                    {
                        name: "",
                    },
                    {
                        name: "",
                    },
                    {
                        name: "",
                    },
                    {
                        name: "",
                    },

                ]
            },
            about: {
                heading: "About Vyapar Bandhu",
                description: "",
                data: [
                    {
                        name: "",
                    },
                ]
            },
            whyvyparbandhu: {
                heading: "Why Vyapar Bandhu",
                data: [
                    {
                        image: "",
                        name: "",
                    },
                    {
                        image: "",
                        name: "",
                    },
                    {
                        image: "",
                        name: "",
                    },
                    {
                        image: "",
                        name: "",
                    },
                    {
                        image: "",
                        name: "",
                    },
                    {
                        image: "",
                        name: "",
                    },
                ]
            },
        });

        await newDoc.save();

        res.status(200).json({ message: 'create Expert call   successfully', data: newDoc });
    } catch (error) {
        console.error('Error create account:', error);
        res.status(500).json({ error: 'Failed create account' });
    }
});


router.get('/getData', async (req, res) => {
    try {
        const newDoc = await HomepageModal.find();
        res.status(200).json(newDoc);
    } catch (error) {
        console.error('Error get list:', error);
        res.status(500).json({ error: 'Failed get list' });
    }
});




router.post('/addImage', async (req, res) => {
    const { innerId } = req.body;
    try {

        const doc = await HomepageModal.findById({ _id: innerId });
        console.log(doc)

        doc.sliderImage.push({ image: "" });

        await doc.save();

        res.status(200).json(doc);
    } catch (error) {
        console.error('Error adding blank object to slider:', error);
        res.status(500).json({ error: 'Failed to add blank object to slider' });
    }
});

router.post('/deleteImage', async (req, res) => {
    try {
        const { docId, objectId } = req.body;
        console.log(docId, objectId)

        const doc = await HomepageModal.findById({ _id: docId});
        console.log(doc)

        doc.sliderImage = doc.sliderImage.filter(obj => obj._id.toString() != objectId);

        await doc.save();

        res.status(200).json(doc);
    } catch (error) {
        console.error('Error deleting object from slider:', error);
        res.status(500).json({ error: 'Failed to delete object from slider' });
    }
});







module.exports = router
