const router = require('express').Router();

const { appendFile } = require('fs');
const saveData = require('../db/saveData');
const uuid = require('uuid');

//Get request

router.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, './public/index'));
});

// Post request
router.post('/notes', (req, res) => {
    req.body.id = uuid.v4();
    saveData
        .addNote(req.body)
        .then(note => res.json(note))
        .catch(err => res.status(400).json(err));
});

//Delete request bonus
router.delete('/notes/:id', (req, res) => {
    saveData
        .deleteNote(req.params.id)
        .then(() => res.json({ok: true }))
        .catch(err => res.status(400).json(err));

});

module.exports = router;