import vision from '@google-cloud/vision';

// const vision = require();


async function quickstart(gcsUri) {
    
    const client = new vision.ImageAnnotatorClient();

    const [result] = await client.labelDetection(gcsUri);
    // const objects = result.localizedObjectAnnotations;
    const labels = result.labelAnnotations;
    console.log('Labels:');
    labels.forEach(label => console.log(label));
    return labels
  }
  
  // quickstart('https://upload.wikimedia.org/wikipedia/en/4/44/SpongeBob_SquarePants_characters_promo.png');

  // module.exports = quickstart