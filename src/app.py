from flask import Flask,make_response
from time import sleep
app=Flask(__name__)
recipes=[
      {
        "id": 1,
        "name": "Egg Salad",
        "description": "A delicious egg salad recipe",
        "ingredients": ["eggs", "mayo", "mustard"],
        "username": "Ratna Kumari",
        "time": 10,
        "servers": 2,
        "image": "https://www.veggieinspired.com/wp-content/uploads/2021/05/raw-veggie-chopped-salad-featured.jpg",
        "type": "breakfast",
    },
  {
        "id": 2,
        "name": "Pasta",
        "description": "A delicious pasta recipe",
        "ingredients": ["pasta", "tomato sauce", "cheese"],
        "username": "Ratna Kumari",
        "time": 10,
        "servers": 2,
        "image": "https://www.veggieinspired.com/wp-content/uploads/2021/05/raw-veggie-chopped-salad-featured.jpg",
        "type": "beverages",
    },
{
        "id": 3,
        "name": "Burger",
        "description": "A delicious burger recipe",
        "ingredients": ["buns", "patty", "lettuce"],
        "username": "Ratna Kumari",
        "time": 10,
        "servers": 2,
        "image": "https://www.veggieinspired.com/wp-content/uploads/2021/05/raw-veggie-chopped-salad-featured.jpg",
        "type": "appetizers",
    },
 {
        "id": 4,
        "name": "Pizza",
        "description": "A delicious pizza recipe",
        "ingredients": ["dough", "cheese", "sauce"],
        "username": "Ratna Kumari",
        "time": 10,
        "servers": 2,
        "image": "https://www.veggieinspired.com/wp-content/uploads/2021/05/raw-veggie-chopped-salad-featured.jpg",
        "type": "breakfast",
    },
  {
        "id": 5,
        "name": "Salad",
        "description": "A delicious salad recipe",
        "ingredients": ["lettuce", "tomato", "cucumber"],
        "username": "Ratna Kumari",
        "time": 10,
        "servers": 2,
        "image": "https://www.veggieinspired.com/wp-content/uploads/2021/05/raw-veggie-chopped-salad-featured.jpg",
        "type": "breakfast",
    },

]
@app.route("/recipes")
def get_recipes():
    resp=make_response({"recipes":recipes})
    resp.headers["Access-Control-Allow-Origin"]="*"
    return resp

@app.route("/recipes/<rid>")
def get_recipe(rid):
    sleep(5)
    for recipe in recipes:
        if recipe["id"]==int(rid):
            resp=make_response(recipe)
            resp.headers["Access-Control-Allow-Origin"]="*"
            return resp
        resp=make_response({"error":"Recipe not found"})
        resp.headers["Access-Control-Allow-Origin"]="*"
        return resp
    
if __name__=="__main__":
    app.run(debug=True,port=5800)