import { nanoid } from "nanoid"

const recipes = [
    {
        id: nanoid(10),
        name: "",
        category: "",
        isVegan: false,
        isGlutenFree: false,
        yield: "",
        time: "",
        ingredients: {
            ingredientName: "weight in g"
        },
        directions: ['step 1', '...', 'step n'],
        crusty: 0,
        flaky: 0,
        chewy: 0,
        sour: 0,
        sweet: 0,
        spicey: 0
    }
]

export default recipes