export default async function getFoodAPI(ingredient) {
    const urlIngredient = `https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`;
    const urlMeal = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=`
    let response = await fetch(urlIngredient).then((response) => response.json());
    let responseMeal = [];
    let idArr = [];
    let idSelected = [];
    let meals = [];
    response.meals.map(i => {
        idArr.push(i.idMeal);
    })
    for (let i = 0; i <= 2; i++) {
        idSelected.push(idArr[Math.floor(Math.random() * idArr.length)])
    }
    for (let i = 0; i <= idSelected.length - 1; i++) {
        responseMeal.push(await fetch(urlMeal + `${idSelected[i]}`).then((response) => response.json()));
    }
    responseMeal.map(el => {
        for (let i = 0; i < el.meals.length; i++) {
            let obj = el.meals[i];
    
            let ingredients = [];
            for (let j = 1; j <= 20; j++) {
              if (obj["strIngredient" + j]) {
                ingredients.push(
                  `${obj[`strIngredient${j}`]} - ${obj[`strMeasure${j}`]}`
                );
              } else {
                break;
              }
            }
            meals.push({
                name: obj.strMeal, 
                idMeal: obj.idMeal,
                instructions: obj.strInstructions,
                ingredient: ingredients,
            })
        }
    })
    return {meals: meals}
};
