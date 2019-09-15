const axios = require('axios').default;

const BIG_OVEN_KEY = "Rc3kEhQ293h59oU9Z853fw48CmI1H1Js"

const BIG_URL = "http://api2.bigoven.com/recipes?pg=1&rpp=25&api_key=Rc3kEhQ293h59oU9Z853fw48CmI1H1Js&isbookmark=0&title_kw="

const GET_ID = "http://api2.bigoven.com/recipe/"

const FIREBASE_URL = "https://cookme-d0c7d.firebaseio.com/"

async function get_recipe(search_string) {
  var recipe_id

  await axios.get(BIG_URL + search_string)
  .then(function (response) {
   recipe_id = response.data.Results[0].RecipeID
  }).catch(function(err) {
   console.log(err)
  })

  await axios.patch(FIREBASE_URL + "historic_search.json", {search_string: recipe_id})
  .then(function (response) {
  }).catch(function(err) {
    console.log(err)
  })

  return await axios.get(GET_ID + recipe_id + "?api_key=" + BIG_OVEN_KEY)
}

async function get_historic(){
  await axios.get(FIREBASE_URL + "historic_search.json")
  .then(function(response){
    console.log(response.data)
  }).catch(function(err){
    console.log(err)
  })

  return(response.data)
}

get_recipe("Lasagna").then(function (response){
    console.log(response.data)
  }).catch(function(err){
    console.log(err)
  })
