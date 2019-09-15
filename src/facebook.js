  const axios = require('axios').default;

const ACCESS_TOKEN = "EAAFfZCZAyb6wwBAPZC2woZBLmt9MhZBeZBbsBiBdZBLZAmFO8ywqdb98uRMcsZB3p41V6w3zFnHhL6PfRX1rNecYpwK4wc9iTYPMZCShXPwl6eO2ZB7km2GgfRQnGRAZAnHA2y9rLSBZADXfkEYtIsBopni2n9vPPxGpi1DZBIlgCauOSBsMaaFgLjHcQv9rHwjDpoVVcTO7LF2HGq8AZDZD";
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