import React, { useState } from 'react';
import axios from 'axios';

const AddRecipeForm = () => {
  const [recipeData, setRecipeData] = useState({
    name: '',
    ingredients: '',
    instructions: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setRecipeData({ ...recipeData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('/api/recipes', recipeData);
      console.log(response.data); // handle success
      // Optionally, you can reset the form fields after successful submission
      setRecipeData({
        name: '',
        ingredients: '',
        instructions: ''
      });
    } catch (error) {
      console.error('Error adding recipe:', error);
      // handle error
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input type="text" name="name" value={recipeData.name} onChange={handleChange} />
      </label>
      <label>
        Ingredients:
        <textarea name="ingredients" value={recipeData.ingredients} onChange={handleChange} />
      </label>
      <label>
        Instructions:
        <textarea name="instructions" value={recipeData.instructions} onChange={handleChange} />
      </label>
      <button type="submit">Add Recipe</button>
    </form>
  );
};

export default AddRecipeForm;
