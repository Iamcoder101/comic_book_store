const ComicBook = require('../model/model');

exports.createComicBook = async (req, res) => {
  try {
    const newComic = new ComicBook(req.body);
    await newComic.save();
    res.status(201).json(newComic);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.updateComicBook = async (req, res) => {
    try {
      const comic = await ComicBook.findByIdAndUpdate(req.params.id, req.body, { new: true });
      res.status(200).json(comic);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  };

  exports.deleteComicBook = async (req, res) => {
    try {
      await ComicBook.findByIdAndDelete(req.params.id);
      res.status(204).json();
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  };

  exports.getComics = async (req, res) => {
    try {
      const { page = 1, limit = 10, sortBy = 'name', order = 'asc', ...filters } = req.query;
      const comics = await ComicBook.find(filters)
        .sort({ [sortBy]: order === 'asc' ? 1 : -1 })
        .skip((page - 1) * limit)
        .limit(parseInt(limit));
  
      res.status(200).json(comics);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  };
  
  exports.getComicById = async (req, res) => {
    try {
      const comic = await ComicBook.findById(req.params.id);
      if (!comic) return res.status(404).json({ error: 'Comic book not found' });
      res.status(200).json(comic);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  };
  