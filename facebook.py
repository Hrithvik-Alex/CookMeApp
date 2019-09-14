import requests
ACCESS_TOKEN = "EAAFfZCZAyb6wwBABnbPWzeEIniSSrtQkffAZCcKtqrF7asvT4qiZBtOdcGaBO8jt5ZByLsNLu6Uqyw18NT0mcFuc0JrM3VZAneZB04qHpzZBC6GsTpxbA2P5RHEKdGS8fI2KfrbnomG32dEYaQXr8T84iyr4ZClAAwFlHYy7jpqHPMcSodINV6Su1gKerUjtRF9OPge3ciIJUNgZDZD"
USER_ID = "17841420180745805"
def get_images(hashtag):
    hash_url = 'https://graph.facebook.com/v4.0/ig_hashtag_search'
    hash_params = {
        "user_id": USER_ID,
        "q": hashtag,
        "access_token": ACCESS_TOKEN
    }
    hashtag_id = requests.get(hash_url,hash_params).json()["data"][0]["id"]



    url='https://graph.facebook.com/'+hashtag_id+'/top_media'
    params = {
        "user_id": USER_ID, 
        "fields": "media_url,caption",
        "access_token": ACCESS_TOKEN
    }

    r = requests.get(url,params).json()
    print(r)
    return r
