import { nanoid } from "nanoid"

const grains = [
    {
        id: nanoid(10),
        name: "Turkey Red",
        classification: "Hard Red Winter Wheat",
        protein: 13.5,
        hasGluten: true,
        pricePerLb: 3,
        grownIn: "Colorado",
        isOrganic: true,
        flavor: "Malty and Sweet",
        texture: "Fine and slightly sandy.",
        bakingCharacteristics: "Performs well in bread, pizza dough, crackers, cookies, pie crusts, muffins, and biscuits. Truly is an all-purpose whole wheat.",
        history: "It was brought from Crimea to Kansas by Mennonite farmers in the 1870's.",
        inStock: true,
        img: "./images/turkey.jpg"
    },
    {
        id: nanoid(10),
        name: "Red Fife",
        classification: "Hard Red Winter Wheat",
        protein: 14,
        hasGluten: true,
        pricePerLb: 3,
        grownIn: "South+Dakota",
        isOrganic: true,
        flavor: "Toasty, Sweet, and Nutty",
        texture: "Fine and slightly sandy.",
        bakingCharacteristics: "Performs well in bread, pizza dough, crackers, cookies, pie crusts, muffins, and biscuits. Truly is an all-purpose whole wheat.",
        history: "It first came to the U.S. from Canada in the mid 1800’s.",
        inStock: true,
        img: "./images/redFife.jpg"
    },
    {
        id: nanoid(10),
        name: "Rouge De Bordeaux",
        classification: "Hard Red Spring Wheat",
        protein: 14,
        hasGluten: true,
        pricePerLb: 3,
        grownIn: "North+Dakota",
        isOrganic: false,
        flavor: "Rich nutty and sweet flavor with notes of cinnamon",
        texture: "Fine and slightly sandy.",
        bakingCharacteristics: "Performs well in bread, pizza dough, bagels, crackers, muffins, and biscuits.",
        history: "It was originally brought to France by the Romans sometime before Christ and then became a staple flour in the 1900’s.",
        inStock: false,
        img: "./images/rouge.jpg"
    },
    {
        id: nanoid(10),
        name: "Clark's Cream",
        classification: "Hard White Winter Wheat",
        protein: 10.8,
        hasGluten: true,
        pricePerLb: 3,
        grownIn: "South+Dakota",
        isOrganic: true,
        flavor: "Mild and sweet.",
        texture: "Fine and slightly sandy.",
        bakingCharacteristics: "Performs well in bread, pizza, and pasta. It also does well in muffins, biscuits, pancakes, and pie crusts.",
        history: "It was released to the market in 1972 by Earl Clark after being bred for over eight generations.",
        inStock: true,
        img: "./images/clarks.jpg"
    },
    {
        id: nanoid(10),
        name: "White Sonora",
        classification: "Soft White Winter Wheat",
        protein: 13.5,
        hasGluten: true,
        pricePerLb: 3,
        grownIn: "Colorado",
        isOrganic: true,
        flavor: "Mild, sweet, and buttery.",
        texture: "Fine and soft.",
        bakingCharacteristics: "Performs well in tortillas, pasta, pie crusts, cookies, and biscuits.",
        history: "It is one of the oldest wheat varieties in North America, having been grown in Sonora, Mexico for at least 150 years.",
        inStock: true,
        img: "./images/sonora.jpg"
    },
    {
        id: nanoid(10),
        name: "Einkorn",
        classification: "Ancient Wheat",
        protein: 15,
        hasGluten: true,
        pricePerLb: 4,
        grownIn: "South+Dakota",
        isOrganic: true,
        flavor: "Robust, grassy, and nutty.",
        texture: "Fine and super soft.",
        bakingCharacteristics: "While high in protein, it has weak gluten, so bread dough made with einkorn wheat requires less water, more folds, and a shorter fermentation. It can be used in muffins, pancakes, and other baked goods without much difficulty.",
        history: "It is the oldest cultivated wheat in the world and has its origins in Turkey. About 10,500 years before present.",
        inStock: true,
        img: "./images/einkorn.jpg"
    },
    {
        id: nanoid(10),
        name: "Emmer",
        classification: "Ancient Wheat",
        protein: 16.6,
        hasGluten: true,
        pricePerLb: 4,
        grownIn: "South+Dakota",
        isOrganic: true,
        flavor: "Rich, earthy, and nutty.",
        texture: "Fine and sandy.",
        bakingCharacteristics: "While high in protein, it has weak gluten, so bread dough made with emmer wheat requires less water, more folds, and a shorter fermentation. It can be used easily in pasta, muffins, pancakes, crackers, and cookies.",
        history: "It is an ancient wheat variety with its origins in the Fertile Crescent. About 10,000 years before present.",
        inStock: true,
        img: "./images/emmer.jpg"
    },
    {
        id: nanoid(10),
        name: "Kamut",
        classification: "Ancient Wheat",
        protein: 15,
        hasGluten: true,
        pricePerLb: 3,
        grownIn: "Montana",
        isOrganic: true,
        flavor: "Sweet, nutty, and buttery.",
        texture: "Fine and sandy.",
        bakingCharacteristics: "Performs well as a porridge or use its sandy-textured flour in bread, crackers, pasta, pie crusts, cookies, and pancakes.",
        history: "It is an ancient wheat variety that probably originated in the Fertile Crescent. Made popular in the US by farmer Bob Quinn.",
        inStock: true,
        img: "./images/kamut.jpg"
    },
    {
        id: nanoid(10),
        name: "Spelt",
        classification: "Ancient Wheat",
        protein: 17.7,
        hasGluten: true,
        pricePerLb: 4,
        grownIn: "Colorado",
        isOrganic: false,
        flavor: "Creamy and earthy.",
        texture: "Fine and super soft.",
        bakingCharacteristics: "Bread dough made with spelt is extensible and silky and can tolerate more water and longer fermentation times than einkorn or emmer but less than modern wheats. Spelt makes great breads, pie crusts, biscuits, pancakes, muffins, and cookies.",
        history: "It is an ancient wheat variety with its origins in the Middle East. About 7,000 years before present.",
        inStock: true,
        img: "./images/spelt.jpg"
    },
    {
        id: nanoid(10),
        name: "Rye",
        classification: "Cultivated Grass",
        protein: 'N/A',
        hasGluten: true,
        pricePerLb: 3,
        grownIn: "Colorado",
        isOrganic: true,
        flavor: "Extremely unique, earthy, and grassy.",
        texture: "Fine and soft.",
        bakingCharacteristics: "While rye flour does have the two proteins that make gluten, it will not make good artisan loaves, instead you can make delicious, moist pan loaves. It can also be used in brownies, cookies, and pancakes.",
        history: "Rye is closely related to barley and wheat and originated in Turkey. Today it is very popular in eastern, central, and northern Europe.",
        inStock: true,
        img: "./images/rye.jpg"
    },
    {
        id: nanoid(10),
        name: "Barley",
        classification: "Cultivated Grass",
        protein: 'N/A',
        hasGluten: true,
        pricePerLb: 3,
        grownIn: "North+Dakota",
        isOrganic: false,
        flavor: "Balanced and earthy.",
        texture: "Fine and soft.",
        bakingCharacteristics: "Can be used whole in soup, porridge, and risotto. Its flour can be added to cookies, pancakes, muffins, and crackers for its rich flavor.",
        history: "It is one of the oldest cultivated grass crops and it has its roots in the Fertile Crescent.",
        inStock: true,
        img: "./images/barley.jpg"
    },
    {
        id: nanoid(10),
        name: "All-Purpose",
        classification: "Sifted Wheat Flour",
        protein: 11,
        hasGluten: true,
        pricePerLb: 3,
        grownIn: "Kansas",
        isOrganic: true,
        flavor: "Mild.",
        texture: "Silky and soft.",
        bakingCharacteristics: "It can be used in most all baking applications in both bread and pastry.",
        history: "This all purpose flour was roller milled and sifted by Heartland Mill in Marienthal, KS. It is unmalted and contains only heirloom Turkey Red wheat, which is the variety brought to Kansas by Mennonite immigrants in the early 1870s. It is wheat from a single field on a single farm, hence the protein percentage and other qualities may vary from lot to lot as is normal for any natural product.",
        inStock: true,
        img: "./images/allPurpose.jpg"
    },
    {
        id: nanoid(10),
        name: "Buckwheat",
        classification: "Gluten Free Pseudocereal",
        protein: 'N/A',
        hasGluten: false,
        pricePerLb: 3,
        grownIn: "South+Dakota",
        isOrganic: true,
        flavor: "Earthy and nutty.",
        texture: "Super fine and sandy.",
        bakingCharacteristics: "It is gluten-free and can be used whole to make porridge or as flour in pancakes, muffins, and cookies.",
        history: "Buckwheat was first domesticated about 8,000 years ago in Southeast Asia. These small, triangular grain-like seeds are not related to wheat, but instead to sorrel and rhubarb.",
        inStock: true,
        img: "./images/buckwheat.png"
    },
    {
        id: nanoid(10),
        name: "Blue Corn",
        classification: "Maize",
        protein: 'N/A',
        hasGluten: false,
        pricePerLb: 3,
        grownIn: "Colorado",
        isOrganic: true,
        flavor: "Sweet and nutty.",
        texture: "Can be ground fine (sandy flour) to coarse (polenta/grits).",
        bakingCharacteristics: "Excellent as polenta or grits, as well as, in tortillas, frybread, cookies, cornbread, and pancakes.",
        history: "Maize, also known as corn, is indigenous to the Americas and was domesticated about 10,000 years ago in southern Mexico. Blue corn is a type of flint corn and has long been cultivated by the Hopi in the Southwest United States.",
        inStock: true,
        img: "./images/blue.png"
    },
    {
        id: nanoid(10),
        name: "Oxacan Green Corn",
        classification: "Maize",
        protein: 'N/A',
        hasGluten: false,
        pricePerLb: 3,
        grownIn: "New+Mexico",
        isOrganic: true,
        flavor: "Slightly savory and nutty.",
        texture: "Can be ground fine (sandy flour) to coarse (polenta/grits).",
        bakingCharacteristics: "Excellent as polenta or grits, as well as, in tortillas, frybread, cookies, cornbread, and pancakes.",
        history: "Maize, also known as corn, is indigenous to the Americas and was domesticated about 10,000 years ago in southern Mexico.",
        inStock: true,
        img: "./images/green.png"
    },
    {
        id: nanoid(10),
        name: "Bloody Burtcher Red Corn",
        classification: "Maize",
        protein: 'N/A',
        hasGluten: false,
        pricePerLb: 3,
        grownIn: "New+Mexico",
        isOrganic: true,
        flavor: "Sweet and slightly nutty.",
        texture: "Can be ground fine (sandy flour) to coarse (polenta/grits).",
        bakingCharacteristics: "Excellent as polenta or grits, as well as, in tortillas, frybread, cookies, cornbread, and pancakes.",
        history: "Maize, also known as corn, is indigenous to the Americas and was domesticated about 10,000 years ago in southern Mexico.",
        inStock: true,
        img: "./images/red.png"
    },
    {
        id: nanoid(10),
        name: "Millet",
        classification: "Gluten Free Pseudocereal",
        protein: 'N/A',
        hasGluten: false,
        pricePerLb: 3,
        grownIn: "Colorado",
        isOrganic: true,
        flavor: "Nutty",
        texture: "Unground and whole.",
        bakingCharacteristics: "Millet adds a fun, snap-crackle-pop texture to baked goods. Add it to cookies, muffins, pancakes, breads, etc. It can also be cooked and eaten whole in a salad, etc.",
        history: "It is indigenous to many parts of the world and has been cultivated since about 7,000 years before present.",
        inStock: true,
        img: "./images/millet.png"
    },
    {
        id: nanoid(10),
        name: "Brown Rice",
        classification: "Rice",
        protein: 'N/A',
        hasGluten: false,
        pricePerLb: 3,
        grownIn: "California",
        isOrganic: true,
        flavor: "Mild.",
        texture: "Fine and sandy.",
        bakingCharacteristics: "It is a good source of magnesium, phosphorus, selenium, thiamine, niacin, vitamin B6, manganese, and is high in dietary fiber. It can be used in cookies, pancakes, muffins, breads, etc.",
        history: "It was first domesticated in the Yangtze River basin in China about 11,000 years before present.",
        inStock: true,
        img: "./images/rice.png"
    },
    {
        id: nanoid(10),
        name: "Oat",
        classification: "Gluten Free Pseudocereal",
        protein: 'N/A',
        hasGluten: false,
        pricePerLb: 3,
        grownIn: "Kansas",
        isOrganic: true,
        flavor: "Deliciously oaty and nutty.",
        texture: "Light and fluffy.",
        bakingCharacteristics: "They are high in protein, dietary fiber, B-vitamins, and other essential minerals. Performs well in cookies, pancakes, and muffins.",
        history: "Oats were first grown in the Fertile Crescent, but are widely grown in Northwestern Europe today.",
        inStock: true,
        img: "./images/oat.png"
    },
    {
        id: nanoid(10),
        name: "Teff",
        classification: "Gluten Free Pseudocereal",
        protein: 'N/A',
        hasGluten: false,
        pricePerLb: 3,
        grownIn: "Idaho",
        isOrganic: true,
        flavor: "Brown teff has an earthy, nutty flavor, while the ivory is a bit more subtle and slightly sweet.",
        texture: "Light and fluffy.",
        bakingCharacteristics: "Performs well in injera, pancakes, crusts, cookies, muffins, etc.",
        history: "It is an ancient grain from Ethiopia and Eritrea, and comprises the staple grain of their cuisines. It is a fine grain—about the size of a poppy seed—that comes in a variety of colors, from white and red to dark brown.",
        inStock: true,
        img: "./images/teff.png"
    }
]

export default grains