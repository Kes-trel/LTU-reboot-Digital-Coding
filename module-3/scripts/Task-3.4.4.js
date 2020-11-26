var recipe = {
    recipeTitle : "Fish Pie",
    servings : 3,
    ingredients : ["salmon","smoked hadock","cod","mash"],
    directions : ["Step 1: poach","Step 2: mix","Step 3: bake"],
}

// console.log(recipe.recipeTitle);
// console.log(recipe.ingredients[0]);
// console.log(recipe.directions);

var ingredients = recipe.ingredients;

for (var index = 0; index < ingredients.length; index++){
    console.log(ingredients[index])
}