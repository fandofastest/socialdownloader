const express = require('express')
const bodyParser = require('body-parser')
const { tikdown } = require("nayan-media-downloader")
const { ytdown } = require("nayan-media-downloader")
const { twitterdown } = require("nayan-media-downloader")
const { search } = require("pinterest-dl");
const getFbVideoInfo = require("fb-downloader-scrapper")



var cokkies ="sb=seiKZSpFI27ChyOINhnmIhL-;datr=seiKZVC76FQAa1S6oDJi1r82;c_user=100003321408506;ps_n=1;ps_l=1;presence=C%7B%22t3%22%3A%5B%5D%2C%22utc3%22%3A1716948832409%2C%22v%22%3A1%7D;wd=1920x945;xs=39%3ADRMAHlmhO-194Q%3A2%3A1709657455%3A-1%3A10998%3A%3AAcUnrsJZ9jMETIaRqT2K7fmm5F2FzlY15lHRfsjdpVMi3g;fr=1tfWYc01iGvr76tqT.AWXmwWzmS_NVOiNwMbDQ1xSsv1g.BmVrOb..AAA.0.0.BmVrOb.AWVhxU6FSIg;";
var ua="Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/89.0.4389.82 Safari/537.36"
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
  let URL = await getFbVideoInfo(url,cokkies,ua)

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