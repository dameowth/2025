const express = require('express');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

app.get("/temperature", (req, res) => {
    res.json({ valor: `10 ºC`, timestamp: new Date().toISOString() });
});

app.listen(PORT, () => { 
    console.log(`Server is running on port ${PORT}`);
});