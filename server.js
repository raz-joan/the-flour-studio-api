import express from 'express'
import cors from 'cors'
import { nanoid } from "nanoid"
import recipes from './data/recipes-data.js'
import grains from './data/grains-data.js'
import reviews from './data/reviews-data.js'

const app = express()
app.use(express.json())
app.use(cors())

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
    res.status(200).json({ [type]: app.locals[type] })
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
    res.status(200).json({ item: reqItem })
})

app.post('/api/v1/reviews', (req, res) => {
    const id = nanoid(10)
    const review = req.body
    let correct = true

    for (let requiredParameter of ['name', 'customerName', 'date', 'rating', 'note']) {
        if (!review[requiredParameter]) {
            correct = false
            res.status(422).send({ error: `Expected format: { name: <String>, customerName: <String>, date: <String>, rating: <Number>, note: <String> }. You're missing a "${requiredParameter}" property.` })
        }
    }

    if (correct) {
        const { name, customerName, date, rating, note } = review
        app.locals.reviews.push({ id, name, customerName, date, rating, note })
        res.status(201).send({ message: 'New review was successfully added!', newReview: { id, name, customerName, date, rating, note } })
    }
})

app.delete('/api/v1/reviews', (req, res) => {
    const id = req.body.id
    if (app.locals.reviews.find(review => review.id === id) === undefined) {
        res.status(422).send({ error: `Expected format: { id: <String> }. No review was found matching the id: ${id}.`})
    }

    const filteredReviews = app.locals.reviews.filter(review => review.id !== id)
    app.locals.reviews = filteredReviews
    res.status(200).send({ message: `Review with id of ${id} was successfully deleted.` })
})

app.listen(app.get('port'), () => {
    console.log(`The Flour Studio is running on 'http://localhost:${app.get('port')}'`)
})

