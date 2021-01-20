const routes = require("express").Router();
const axios = require("axios");

routes.get("/search", (req, res) => {
  const product = req.query.product;

  axios
    .get(`https://api.mercadolibre.com/sites/MLA/search?q=${product}`)
    .then((productos) => {
      if (product) {
        productos.data.results
          ? res.send(productos.data.results)
          : res.status(400).send("No se encontro el producto");
        console.log("No se encontro el producto");
      } else {
        res.status(400).send("No se recibio nada");
        console.log("No se recibio nada")
      }
    });
});

module.exports = routes;
