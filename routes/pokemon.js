
const express = require("express");

const data = require("../data");

const router = express.Router();

// Endpoint preparado para receber requisições do tipo GET e responder com todos os dados guardados na minha array
router.get("/pokemon", (req, res) => {
  return res.status(200).json(data);
});

router.get("/pokemon/:id", (req, res) => {
  const { id } = req.params;
  const documentToEdit = data.find(
    (currentElement) => currentElement.id == id
  );

  return res.status(200).json(data.find((element) => element.id == id));
});

module.exports = router;