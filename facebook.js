const axios = require('axios').default;

const ACCESS_TOKEN = "EAAFfZCZAyb6wwBAMovpCJMaqLwtTx5cXxLQpZAGXfNCXiXXkVABCuoMkHGl4ZCcDBlCEkZCEO5ZC3k9jyy0ueBZCl5ohfowBZC443qPkGpRjgYbfNdMApiUfePxzjs0YZC8CrFtvM2eytA0lLEHaOTyuQgcmZBV9bxirrU6OdXod77Q544lK3ifbO9pEJdisuEYsbOAZCLZAnoonGwZDZD"
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
    
    await axios.get("https://graph.facebook.com/"+hash_id+"/top_media?user_id="+USER_ID+"&fields=caption,media_url&access_token="+ACCESS_TOKEN) 
    .then(function (response) {
        r = response.data
        console.log(response);
       }).catch(function(err) {
        console.log(err)
      })

    return r
}

console.log(get_images("blueberry"))