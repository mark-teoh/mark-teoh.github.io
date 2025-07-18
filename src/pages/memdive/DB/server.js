/*

This currently is not working as it is currently hosted on github pages.

Change to when self hosting.

*/
import express from 'express';
import cors from 'cors';
import fs from 'fs/promises';  // for async file read

const app = express();
const PORT = 3001;

app.use(cors());

app.get('/dives', async (req, res) => {
  try {
    const data = await fs.readFile('./diveList.JSON', 'utf-8');
    const dives = JSON.parse(data);
    res.json(dives);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
