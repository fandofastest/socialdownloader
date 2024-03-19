const express = require('express')
const bodyParser = require('body-parser')
const { tikdown } = require("nayan-media-downloader")
const { ndown } = require("nayan-media-downloader")
const { ytdown } = require("nayan-media-downloader")

const app = express()
 
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
 

app.post('/tiktok',async (req, res) => {
  let url = req.body.url;  
  let URL = await tikdown(url)

  res.send(URL);
})


app.post('/fb',async (req, res) => {
  let url = req.body.url;  
  let URL = await ndown(url)

  res.send(URL);
})


app.post('/yt',async (req, res) => {
  let url = req.body.url;  
  let URL = await ytdown(url)

  res.send(URL);
})

app.listen(3000, () => {
  console.log('Example app listening on port 3000!')
})