const express = require('express');
const app = express();
const PORT = 3000;

app.get('/api', (req, res) => {
  res.json({
    nombre: "Ander Gilberto Popol Poron",
    albumFavorito: "Silvio de Silvio Rodriguez"
  });
});


app.listen(PORT, () => {
  console.log(`API escuchando en http://localhost:${PORT}`);
});
