const express = require('express')
const bodyParser = require('body-parser')
const { tikdown } = require("nayan-media-downloader")
const { ytdown } = require("nayan-media-downloader")
const { twitterdown } = require("nayan-media-downloader")
const { search } = require("pinterest-dl");
const getFbVideoInfo = require("fb-downloader-scrapper")



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
  let URL = await getFbVideoInfo(url)

  res.send(URL);
})

app.post('/twitter',async (req, res) => {
  let url = req.body.url;  
  let URL = await twitterdown(url)

  res.send(URL);
})
app.post('/yt',async (req, res) => {
  let url = req.body.url;  
  let URL = await ytdown(url)

  res.send(URL);
})

app.post('/pinterest',async (req, res) => {
  let url = req.body.url;  
  let URL = await search(url)

  res.send(URL);
})

app.listen(3000, () => {
  console.log('Example app listening on port 3000!')
})