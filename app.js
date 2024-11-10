const express = require('express');
const cors = require('cors');
const app = express();

const port = process.env.PORT;

app.use(cors());

app.get('/api/data', (req, res) => {
    res.json({ message: "Hello from the API!" });
});

app.listen(port, () => {
    console.log(`API running at http://localhost:${port}`);
});
