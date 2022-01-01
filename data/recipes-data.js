import { nanoid } from "nanoid"

const recipes = [
    {
        id: nanoid(10),
        name: "Waffles",
        category: "Cultivated Grass",
        isVegan: false,
        isGlutenFree: false,
        yield: "4-6 waffles",
        time: "30 min",
        ingredients: ["1/4 cup all purpose flour", "3/4 cup rye or barley flour", "2 Tbsp sugar", "1/4 tsp salt", "1 cup milk, room temp", "3 Tbps vegetable oil", "2 eggs, room temp"],
        directions: "In a medium bowl, sift together the dry ingredients and set aside. In a separate medium bowl, whisk together the milk and veg oil. Separate the eggs into small bowls. Add the yolks to the wet mix and whisk together. Whip the whites into soft peaks with a whisk. Pour the wet mix into the dry mix. Gently combine. Fold the egg whites into the batter in thirds. Grease and heat the waffle iron. Pour batter onto the iron and cook. Eat and enjoy.",
    },
    {
        id: nanoid(10),
        name: "Pancakes",
        category: "Maize",
        isVegan: false,
        isGlutenFree: false,
        yield: "4-6 pancakes",
        time: "30 min",
        ingredients: ["1 1/2 cups blue, green, or red cornmeal", "1 tsp salt", "1 1/2 cups boiling water", "1/4 cup milk, maybe more", "2 eggs", "2 Tbsp vegetable oil", "1 tsp vanilla", "1/2 cup pinenuts", "butter and maple for yumming up"],
        directions: "Mix the cornmeal, salt, and boiling water together in a bowl and let sit for 20 min to soften the corn. Add everything else and mix together. Cook on a cast iron skillet on low to medium heat. Be sure to cook them thoroughly, otherwise they will be mushy inside. Slather with butter and maple and enjoy."
    },
    {
        id: nanoid(10),
        name: "Chocolate Chip Cookies",
        category: "Soft White Winter Wheat",
        isVegan: true,
        isGlutenFree: false,
        yield: "Two dozen cookies.",
        time: "1 hour",
        ingredients: ["1 Tbsp ground flaxseed", "2 1/2 Tbsp water", "1/2 cup vegan butter, room temp", "1 1/4 cups brown sugar", "2 tsp vanilla", "1 1/2 cups Sonora flour", "2 tsp cornstarch", "1 tsp baking soda", "1/2 tsp salt", "1 1/2 cups non-dairy chocolate chips"],
        directions: "Preheat the oven to 350F and line two baking sheets with parchment or pray with oil. Mix the ground flaxseed and water in a small bowl ans set aside to make your flax egg. In a large bowl, beat together the softened butter and sugar until creamy. Add the vanilla and flax egg and mix to combine. In a separate medium bowl, sift together the flour, cornstarch, baking soda, and salt. Gently fold in to the wets to incorporate. Add the chocolate chips and stir throughout. Roll the dough into balls about 1 - 2 Tbsp each. Place on the baking sheets and bake for about 10 minutes, until they are just golden around the edges and puffy."
    },
    {
        id: nanoid(10),
        name: "Walnut Zucchini Bread",
        category: "Hard Red Winter Wheat",
        isVegan: false,
        isGlutenFree: false,
        yield: "One 9x5 inch loaf",
        time: "1 1/2 hours",
        ingredients: ["2 large eggs", "1/3 cup molasses or honey", "1/2 cup vegetable oil", "1/3 cup brown sugar, packed", "1 tsp vanilla", "2 cups turkey red, red fife, or rouge de bordeaux flour", "1 tsp salt", "1/2 tsp baking soda", "1/2 tsp baking powder", "1 tsp ground cinnamon", "2 cups shredded, unpeeled zucchini", "1 cup chopped walnuts"],
        directions: "Preheat the oven to 375F and lightly grease a 9 x 5 inch loaf pan. In a large mixing bowl, beat the eggs, molasses, oil, sugar, and vanilla until smooth. In a medium bowl, sift together the flour, salt, baking soda, baking powder, and cinnamon. Add these dries to the wets and mix until combined. Stir in the zucchini and nuts. Pour the batter into the pan and bake for 45 - 55 minutes until the loaf tests done (a toothpick inserted into the center will come out clean). Let the loaf cool in the pan for 10 - 15 minutes before turning out onto a cooling rack to continue cooling. Do not cut before completely cooled."
    },
    {
        id: nanoid(10),
        name: "Pasta",
        category: "Ancient Wheat",
        isVegan: true,
        isGlutenFree: false,
        yield: "Quite a lot.",
        time: "1 1/2 hours",
        ingredients: ["1 1/2 cups + 1 Tbsp all purpose flour", "1 1/2 cups + 1 Tbsp einkorn, emmer, kamut, or spelt flour", "5 eggs OR 3/4 cup aquafaba, to make vegan"],
        directions: "In a large bowl, combine the two flours. Make a well in the center to crack the eggs into. Incorporate the flours and eggs until a dough forms. Knead the dough for five minutes, until stiff. Cover to maintain moisture and let the dough rest for thirty minutes in the fridge. Cut into four pieces and cover what you are not rolling our. On a floured surface, roll out one piece of dough into a thin sheet. Lightly flour and fold the sheet over to roll it out again. Repeat several times. Cut into stips or desired shape. Cook immediately or dry it for storage."
    },
    {
        id: nanoid(10),
        name: "Pie Crust",
        category: "Hard White Winter Wheat",
        isVegan: true,
        isGlutenFree: false,
        yield: "One 9 inch crust",
        time: "1 hour",
        ingredients: ["1 1/2 cups Clark's Cream flour", "1/4 tsp salt", "1 tsp sugar", "8 Tbsp COLD butter (can substitute vegan butter)", "8 - 10 Tbsp COLD water"],
        directions: "Mix flour, salt, and sugar together in a medium sized bowl. Cut in the butter. (The finer the butter, the cripser the crust. For flaky crust, leave larger butter pieces.) Add Water until the dough begins to come together. Careful not to overmix. Form dough into a ball, wrap or cover and put in the fridge to chill while you make a filling. When the filling is ready, roll out the dough on a lightly floured surface."
    },
    {
        id: nanoid(10),
        name: "Fruit-filled Muffins",
        category: "Ancient Wheat",
        isVegan: false,
        isGlutenFree: false,
        yield: "One dozen muffins.",
        time: "1 hour",
        ingredients: ["3 cups einkorn, emmer, kamut, or spelt flour", "1 Tbsp baking powder", "1/2 tsp baking soda", "1/2 tsp salt", "1 1/2 tsp cinnamon", "1 1/4 cups milk, possibly more", "2 extra large eggs, lightly beaten", "2 sticks butter, melted", "2 cups diced fruit, your choice", "1 - 1 1/2 cups sugar"],
        directions: "Sift the dry ingredients together in a large bowl. In a medium bowl, combine the milk, eggs, and butter. Make a well in the dries, pour in the wets, and stir together until just combined. (Don't overmix, some clumps are okay. Add more milk if it's too dry.) Add the fruit and sugar and still gently to combine. Line a muffin tin with paper liners and fill each 3/4 full. Bake at 375F for 25 - 30 minutes, until a toothpick comes out clean and the tops are nicely browned."
    }
]

export default recipes