var express = require('express')
var cors = require('cors')
var app = express()
var fetch = require('node-fetch');
var fs = require('fs');

app.use(cors())

var whitelist = ['http://localhost:3000']
var corsOptions = {
  origin: function (origin, callback) {
    if (whitelist.indexOf(origin) !== -1) {
      callback(null, true)
    } else {
      callback(new Error('Not allowed by CORS'))
    }
  }
}


// const vision = require();


async function quickstart(gcsUri) {
    const vision = require('@google-cloud/vision');
    
    const client = new vision.ImageAnnotatorClient();
    // console.log((gcsUri));
    const res = await fetch(gcsUri)
    const data = await res.buffer()
    const dest = fs.writeFileSync('./octocat.png', data);
    const [result] = await client.labelDetection('./octocat.png');
    // console.log(result);
    // const objects = result.localizedObjectAnnotations;
    const labels = result.labelAnnotations;
    console.log('Labels:');
    labels.forEach(label => console.log(label));
    return labels
}
 
app.get('/json', cors(corsOptions), async function (req, res, next) {
    // console.log(req.query)
    var boi = await quickstart(req.query.img)
    res.send(boi)
})
 
app.listen(4000, function () {
  console.log('CORS-enabled web server listening on port 4000')
})