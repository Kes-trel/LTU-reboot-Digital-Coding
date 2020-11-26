var recipe = {
    recipeTitle : "Fish Pie",
    servings : 3,
    ingredients : ["salmon","smoked hadock","cod","mash"],
    directions : ["Step 1: poach","Step 2: mix","Step 3: bake"],
    letsCook: function () {
        console.log("I'm hungry! Let's cook " + recipe.recipeTitle);
    }
}

recipe.letsCook();