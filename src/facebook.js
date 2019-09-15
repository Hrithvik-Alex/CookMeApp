  const axios = require('axios').default;

const ACCESS_TOKEN = "EAAFfZCZAyb6wwBAJEmVr7hjZBMXkZBlnfmaxPBpScaLZCqieWM5l2bN4tCM1LpzxfhqsrJEj1L4y69Kz56w6DR9xGOXniKyvkcf0XhfPclomQEZCy9btZCeZBv9vYdO9Lt22kZBjFnrSWPKrJ5IeAUO3QwHgTcT3B2XsdI08QTx6JI07upAEXw6AIh33dsHUZAIq422jZAldeXxIgZDZD";
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