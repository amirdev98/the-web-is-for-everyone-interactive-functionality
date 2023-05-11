// importeer express
import express from "express";

// maak een nieuwe express app
const server = express();
const host = "10.10.209.49";

// Gebruik de public map als bron voor de statische bestanden
server.use(express.static("public"));

// Stel de view engine in als EJS
server.set("view engine", "ejs");

// Stel de map voor views in
server.set("views", "./views");

// Stel de afhandeling van formulieren in
server.use(express.json());
server.use(express.urlencoded({ extended: true }));

// Definieer de hoofdpagina route
server.get("/", (req, res) => {
  res.render("index"); // toon de index-pagina
});

// Definieer de /principes route
server.get("/principes", (req, res) => {
  let url = `https://api.vervoerregio-amsterdam.fdnd.nl/api/v1/principes`;

  // haal data op van de externe API en render de "principes" pagina met de data
  fetchJson(url).then((data) => {
    res.render("principes", data);
  });
});

// Definieer de /urls route
server.get("/urls", (req, res) => {
  let url = `https://api.vervoerregio-amsterdam.fdnd.nl/api/v1/urls?first=100`;

  // haal data op van de externe API en render de "urls" pagina met de data
  fetchJson(url).then((urlsData) => {
    let websites = `https://api.vervoerregio-amsterdam.fdnd.nl/api/v1/websites?first=20`;
    fetchJson(websites).then((websitesData) => {
      res.render("urls", {
        urls: urlsData.urls,
        websites: websitesData.websites,
      });
    });
  });
});

// Definieer de /new route
server.post("/new", (req, res) => {
  let url = `https://api.vervoerregio-amsterdam.fdnd.nl/api/v1/urls`;

  // stuur gegevens naar de externe API om nieuwe data te maken
  postJson(url, req.body).then((data) => {
    console.log(data);
    res.redirect("/urls"); // leidt de gebruiker door naar de urls-pagina
  });
});

// Stel de poort in op 8000
server.set("port", 8000);

// Start de server op de opgegeven poort en host
server.listen(server.get("port"), () => {
  console.log(`Application started on http://localhost:${server.get("port")}`);

  console.log(
    `Application started on network http://${host}:${server.get("port")}`
  );
});

/**
 * Wraps the fetch api and returns the response body parsed through json
 * @param {*} url the api endpoint to address
 * @returns the json response from the api endpoint
 */
 async function fetchJson(url) {
  return await fetch(url)
    .then((response) => response.json())
    .catch((error) => error);
}

/**
 * postJson() is a wrapper for the experimental node fetch api. It fetches the url
 * passed as a parameter using the POST method and the value from the body paramater
 * as a payload. It returns the response body parsed through json.
 * @param {*} url the api endpoint to address
 * @param {*} body the payload to send along
 * @returns the json response from the api endpoint
 */
export async function postJson(url, body) {
  return await fetch(url, {
    method: "post",
    body: JSON.stringify(body),
    headers: { "Content-Type": "application/json" },
  })
    .then((response) => response.json())
    .catch((error) => error);
}