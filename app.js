const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const comicRoutes = require('./routes/CRoutes');

dotenv.config();
const app = express();

// Middleware
app.use(express.json());
app.use('/api', comicRoutes);

// Database connection
mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.error(err));

// Starting the server
const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
