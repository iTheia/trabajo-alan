import express from 'express'
import http from 'http'
import bodyParser from 'body-parser'
import router from './router'
import config from './config'
import path from 'path'
import cors from 'cors'

const app = express()
const server = http.createServer(app)

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
    extended: true
}))

app.use(cors())
app.use('/api/v1/', router)

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/build/index.html'), (err) =>{
      if (err) {
          res.status(500).send(err)
      }
  })
})


const port = config.port
server.listen(port)