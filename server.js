const express = require('express')
const path = require('path')
const app = express()
const PORT = process.env.PORT || 5000

app
  .use(express.static(path.join(__dirname, 'static')))

app.get('/', (req, res) =>
    res.sendFile(path.join(__dirname, './static/build', 'index.html')))

// see abhi hum sirf index.html page render krwa rhe h isem ^^

// agr koi or page add krna h to vo /static folder me add kr dio .html
// then url add kr diyo esechae 
// app.get('/', (req, res) =>
//     res.sendFile(path.join(__dirname, './static/build', 'index.html')))

app.listen(PORT, () => {
    // eslint-disable-next-line no-console
    console.log(`Listening at ${PORT}`)
  })