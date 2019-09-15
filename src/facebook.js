const axios = require('axios').default;

const ACCESS_TOKEN = "EAAFfZCZAyb6wwBAHXk8BbVgbyqu5WWPlPM4ffOZAEWcJZAwuquXltqgyYGFyyxFN8rCwfYgZCj6lvovkD72RGQ23CgpHZBuaoGgUNJXt6mnKELbD9ZB8bscnckj1rS8RZCEVubCcQYNlvMA80mIr7Tj7Fra5rv2ovsXf01lVS50xowdmrn2K8bZBNoSVQKocHgGCbks3YeZCM2hgZDZD";
const USER_ID = "17841420180745805"

async function get_images(hashtag) {
    var hash_id;
    var r;
    // console.log("fuck")
    await axios.get("https://graph.facebook.com/v4.0/ig_hashtag_search?user_id="+USER_ID+"&q="+hashtag+"&access_token="+ACCESS_TOKEN)
    .then(function (response) {
       hash_id = response.data.data[0].id
        console.log(hash_id);
      }).catch(function(err) {
        console.log(err)
      })
    
    await axios.get("https://graph.facebook.com/"+hash_id+"/top_media?user_id="+USER_ID+"&fields=caption,media_url,media_type&access_token="+ACCESS_TOKEN) 
    .then(function (response) {
        r = response.data
       }).catch(function(err) {
        console.log(err)
      })

    return r
}

module.exports = get_images