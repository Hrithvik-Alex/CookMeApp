

async function quickstart(gcsUri) {
    const vision = require('@google-cloud/vision');

    // Creates a client
    const client = new vision.ImageAnnotatorClient();

    /**
     * TODO(developer): Uncomment the following line before running the sample.
     */
    // const gcsUri = `https://www.eatright.org/-/media/eatrightimages/food/nutrition/nutritionfactsandfoodlabels/sodium-salt-1083487948.jpg`;
    const [result] = await client.labelDetection(gcsUri);
    // const objects = result.localizedObjectAnnotations;
    const labels = result.labelAnnotations;
    console.log('Labels:');
    labels.forEach(label => console.log(label.description));
    return labels
  }
  
  quickstart();