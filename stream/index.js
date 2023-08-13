const express = require("express");
const cors = require("cors");
const app = express();

app.use(cors());

const adsList = {
  images: [
    {
      path: "assets/sale1.png",
      alt: "sale1",
    },
    {
      path: "assets/sale2.png",
      alt: "sale2",
    },
    {
      path: "assets/sale3.png",
      alt: "sale3",
    },
    {
      path: "assets/sale4.png",
      alt: "sale4",
    },
    {
      path: "assets/sale5.png",
      alt: "sale5",
    },
  ],
};

app.get("/", (request, response) => {
  response.send(adsList);
});

app.listen(3000, () => {
  console.log("Listen on the port 3000...");
});
