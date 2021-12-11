import { nanoid } from 'nanoid'
import express from 'express'
const app = express()

app.set('port', process.env.PORT || 3000)
app.locals.grains = [{id: nanoid(10), name:'grain1'}, {id: nanoid(10), name: 'grain2'}]
app.locals.recipes = [{ id: nanoid(10), name: 'recipe1' }]

app.get('/', (req, res) => {
    res.send("Welcome to the API for The Flour Studio. Visit '/api/v1/grains' or '/api/v1/recipes'")
})

app.get('/api/v1/:type', (req, res) => {
    const { type } = req.params
    if (type !== 'grains' && type !== 'recipes') {
        res.status(404).send(`'${type} is not an endpoint. Please try '/api/v1/grains' or '/api/v1/recipes'`)
    }
    res.status(200).json(app.locals[type])
})

app.get('/api/v1/:type/:id', (req, res) => {
    console.log(req.params)
    const { type, id } = req.params
    if (type !== 'grains' && type !== 'recipes') {
        res.status(404).send(`'${type} is not an endpoint. Please try '/api/v1/grains' or '/api/v1/recipes'`)
    }
    const reqItem = app.locals[type].find(item => item.id === id)
    if (!reqItem) {
        res.status(404).send(`'${type}' is an endpoint, however '${id}' does not match any of the ids within ${type}`)
    }
    res.status(200).json(reqItem)
})

app.listen(app.get('port'), () => {
    console.log(`The Flour Studio is running on http://localhost:${app.get('port')}`)
})

