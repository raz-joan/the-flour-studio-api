# Mod 2: Final Solo Project: The Flour Studio API  

Authored by: [Joan Rasmussen](https://github.com/raz-joan)    

## Overview  
This repo was written as the backend server to fulfill the requirements of the [Showcase project](https://frontend.turing.edu/projects/module-3/showcase.html), such that you could make an application based on the data from your chosen API. This API provides data on grains and recipes, as well as, user reviews, which can be added or deleted.  

## Code Architecture  
The server was written in JavaScript with express.js on Node.js. The routes are all contained in the file `server.js`. Babel and Nanoid were installed as dependencies for syntax and creating unique ids. The data files that are imported and assigned to app.locals are all contained in the data folder.

## Reflections  
I found this project to be a fun challenge and really enjoyed learning some backend concepts. Express.js makes writing the logic quite simple. I also became familiar with using the application Postman in order to easily test the functionality of the dynamic endpoints and the corresponding error-handling.

## Setup Instructions  
1. Clone down this repo to your local machine:
    * `git clone git@github.com:raz-joan/the-flour-studio-api.git`
2. Change into the new directory:
    * `cd the-flour-studio-api`
3. Install the dependencies:
    * `npm install`
4. To fire up the server, run:
    * `node server.js` or `npm run start` or `nodemon server.js`
5. In the browser or postman, use the following endpoints with the base URL: [http://localhost:3000/](http://localhost:3000/) to retrieve, post, or delete data.

## Endpoints  
| url | verb | options | sample response |
| ----|------|---------|---------------- |
| `http://localhost:3000/api/v1/grains/` | GET | not needed | Array of all existing grains: `{ grains: [{ "id": "OX6eHvFFc8", "name": "Turkey Red", "classification": "Hard Red Winter Wheat", "protein": 13.5, "hasGluten": true, "pricePerLb": 3, "grownIn": "Colorado", "isOrganic": true, "flavor": "Malty and Sweet", "texture": "Fine and slightly sandy.", "bakingCharacteristics": "...", "history": "...", "inStock": true,"img": "./images/turkey.jpg" }]}` |
| `http://localhost:3000/api/v1/grains/:id` | GET | not needed | Object of a specific grain by Id: `{ item: { "id": "OX6eHvFFc8", "name": "Turkey Red", "classification": "Hard Red Winter Wheat", "protein": 13.5, "hasGluten": true, "pricePerLb": 3, "grownIn": "Colorado", "isOrganic": true, "flavor": "Malty and Sweet", "texture": "Fine and slightly sandy.", bakingCharacteristics": "...", "history": "...", "inStock": true, "img": "./images/turkey.jpg" }}` |
| `http://localhost:3000/api/v1/recipes/` | GET | not needed | Array of all existing recipes: `{ recipes: [{ "id": "RUTCHm1gtW", "name": "Pancakes", "category": "Maize", "isVegan": false, "isGlutenFree": false, "yield": "4-6 pancakes", "time": "30 min", "ingredients": ["1 1/2 cups blue, green, or red cornmeal", "1 tsp salt", "1 1/2 cups boiling water", "1/4 cup milk, maybe more", "2 eggs", "2 Tbsp vegetable oil", "1 tsp vanilla", "1/2 cup pinenuts", "butter and maple for yumming up"], "directions": "..." }]}` |
| `http://localhost:3000/api/v1/recipes/:id` | GET | not needed | Object of a specific recipe by Id: `{ item: { "id": "RUTCHm1gtW", "name": "Pancakes", "category": "Maize", "isVegan": false, "isGlutenFree": false, "yield": "4-6 pancakes", "time": "30 min", "ingredients": ["..."], "directions": "..." }}` |
| `http://localhost:3000/api/v1/reviews/` | GET | not needed | Array of all existing reviews: `{ reviews: [{ "id": "0MxzViR3vK", "name": "Rye", "customerName": "Happy Baker", "date": "2022/01/01", "rating": 4, "note": "Yum!" }]}` |
| `http://localhost:3000/api/v1/reviews/:id` | GET | not needed | Object of a specific review by Id: `{ item: { "id": "0MxzViR3vK", "name": "Rye", "customerName": "Happy Baker", "date": "2022/01/01", "rating": 4, "note": "Yum!" }}` |
| `http://localhost:3000/api/v1/reviews/` | POST | `{ "name": <'String'>, "customerName": <'String'>, "date": <'String'>, "rating": <'Number'>, "note": <'String'> }` | Response body: `{ "message": "New review was successfully added!", "newReview": { "id": "0MxzViR3vK", "name": "Rye", "customerName": "Happy Baker", "date": "2022/01/01", "rating": 4, "note": "Yum!" }}` |
| `http://localhost:3000/api/v1/reviews` | DELETE | `{ "id": <'String'> }` | Response body: `{ "message": "Review with id of 0MxzViR3vK was successfully deleted." }` |  

Note: All of these endpoints will return semantic errors if something is wrong with the request.