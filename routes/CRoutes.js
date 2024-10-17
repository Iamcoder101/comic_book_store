const express = require('express');
const { createComicBook,updateComicBook,deleteComicBook,getComics,getComicById } = require('../controllers/Ccontrollers');
const router = express.Router();

router.post('/comics', createComicBook);
router.put('/comics/:id', updateComicBook);
router.delete('/comics/:id', deleteComicBook);
router.get('/comics', getComics);
router.get('/comics/:id', getComicById);


module.exports = router;
