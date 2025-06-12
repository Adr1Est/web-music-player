const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

app.get('/tracks', async (req, res) => {
  try {
    const response = await fetch('https://api.deezer.com/chart', {
      method: 'GET'
    });
    const data = await response.json()
    const list = data.tracks.data
    res.json(list)
  } catch (error) {
    res.status(500).json({ error: 'Error fetching from Deezer' });
  }
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Proxy running on port: ${PORT}`);
});