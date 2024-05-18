
const theMealDbApiKey = process.env.REACT_APP_THE_MEAL_DB_API_KEY;

// Example: https://api.spoonacular.com/recipes/complexSearch/?cuisine=Korean&apiKey=spoonApiKey



export const searchRecipes = (query) => {
  // return fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${spoonApiKey}${query}`);

  return fetch(`https://www.themealdb.com/api/json/v2/${theMealDbApiKey}/${query}`);
};
