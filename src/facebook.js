  const axios = require('axios').default;

const ACCESS_TOKEN = "EAAFfZCZAyb6wwBANcD6eKTssu9ZAriu8llIxuhBHP6kgJkGXhjJ5P5ZAuVzzTh98w74ib2yfmIAk8OC8ODoEKESiWIZBE7uSgj8a8zihx1z4Upm9sI6rtXi4ckkPXep5gklL0wd9flK3WVVXWpKtk7yOuZACmWRLPnkkMYxGiyA5dyZBnQkKajlQkQDbk2E61YZB8hN65NX2JwZDZD";
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