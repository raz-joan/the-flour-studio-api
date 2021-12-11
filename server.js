import express from 'express'
import recipes from './recipes-data'
import grains from './grains-data'
import reviews from './reviews-data'
const app = express()

app.set('port', process.env.PORT || 3000)
app.locals.grains = grains
app.locals.recipes = recipes
app.locals.reviews = reviews

app.get('/', (req, res) => {
    res.send("Welcome to the API for The Flour Studio. Visit '/api/v1/grains' or '/api/v1/recipes' or '/api/v1/reviews' for data.")
})

app.get('/api/v1/:type', (req, res) => {
    const { type } = req.params
    if (type !== 'grains' && type !== 'recipes' && type !== 'reviews') {
        res.status(404).send(`'${type}' is not an endpoint. Please try '/api/v1/grains' or '/api/v1/recipes' or '/api/v1/reviews'.`)
    }
    res.status(200).json(app.locals[type])
})

app.get('/api/v1/:type/:id', (req, res) => {
    const { type, id } = req.params
    if (type !== 'grains' && type !== 'recipes' && type !== 'reviews') {
        res.status(404).send(`'${type}' is not an endpoint. Please try '/api/v1/grains' or '/api/v1/recipes' or '/api/v1/reviews'.`)
    }
    const reqItem = app.locals[type].find(item => item.id === id)
    if (!reqItem) {
        res.status(404).send(`'${type}' is an endpoint, however '${id}' does not match any of the ids within '${type}'.`)
    }
    res.status(200).json(reqItem)
})

app.listen(app.get('port'), () => {
    console.log(`The Flour Studio is running on 'http://localhost:${app.get('port')}'`)
})

