require('dotenv').config();
const express       = require('express');
const cors          = require('cors');
const bodyParser    = require('body-parser');
const userRoutes    = require('./routes/routes');

const app = express();
const PORT = process.env.PORT || 5001;

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use('/api', userRoutes);

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
