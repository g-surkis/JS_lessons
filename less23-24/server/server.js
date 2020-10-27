const express = require('express')
// const path = require('path')
const router = require('./router')
var cors = require('cors')
var app = express();

app.use(cors())
app.use(router)

// app.set('views', path.join(__dirname, 'views'))
// app.set('view engine', 'hbs')

// app.get('/', (req, res) => {
//     console.log('req: ', req);


//   res.send(JSON.stringify({
//     title: 'Hello, world!',
//     content: 'How are you?'
//   }))
// })

const port = process.env.PORT || 3000
app.listen(port, () => console.log(`App listening on port ${port}`))