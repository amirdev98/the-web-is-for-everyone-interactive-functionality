//import express en dotenv 
import express from 'express'

//maak een nieuwe express app
const server = express()

//public map gebruiken
server.use(express.static('public'))

//stel de views in
server.set('view engine', 'ejs')
server.set('views', './views')

// Stel afhandeling van formulieren in
server.use(express.json())
server.use(express.urlencoded({ extended: true }))

server.get('/', (req, res) => {
    res.render('index')
})

//hier komen de routes
server.get('/principes', (req, res) => { 
    let url = `https://api.vervoerregio-amsterdam.fdnd.nl/api/v1/principes`    
    fetchJson(url).then((data) => {
        res.render('principes', data)
    })
})

server.get('/urls', (req, res) => { 
    let url = `https://api.vervoerregio-amsterdam.fdnd.nl/api/v1/urls?first=20`
    fetchJson(url).then((data) => {
        res.render('urls', data)
    })
})

server.get('/form', (req, res) => {
    
})



//poortnummer instellen
server.set('port', 8000)

//start de server
server.listen(server.get('port'), () => {
  console.log(`Application started on http://localhost:${server.get('port')}`)
})
/**
 * Wraps the fetch api and returns the response body parsed through json
 * @param {*} url the api endpoint to address
 * @returns the json response from the api endpoint
 */
async function fetchJson(url) {
  return await fetch(url)
    .then((response) => response.json())
    .catch((error) => error)
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
    method: 'post',
    body: JSON.stringify(body),
    headers: { 'Content-Type': 'application/json' },
  })
    .then((response) => response.json())
    .catch((error) => error)
}