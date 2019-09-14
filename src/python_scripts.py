import requests

BIG_OVEN_KEY = "Rc3kEhQ293h59oU9Z853fw48CmI1H1Js"

BIG_URL = "http://api2.bigoven.com/recipes?pg=1&rpp=25&api_key=" + BIG_OVEN_KEY + "&isbookmark=0&title_kw="

GET_ID = "http://api2.bigoven.com/recipe/"


def get_recipe_id(search_string):
  return requests.get(BIG_URL + search_string).json().get("Results")[0].get("RecipeID")


def get_recipe(recipe_search):
  recipe_id = get_recipe_id(recipe_search)

  requests.patch("https://cookme-d0c7d.firebaseio.com/historic_search.json", '{"' + recipe_search + '":' + str(recipe_id) + '}')

  return requests.get(GET_ID + str(recipe_id) + "?api_key=" + BIG_OVEN_KEY).json()


def get_historic():
  return requests.get("https://cookme-d0c7d.firebaseio.com/historic_search.json").json()
