import './App.css'
import { Recipe } from './Types/Recipe';
import RecipeBox from './Components/RecipeBox';

function App() {
  const recipes: Recipe[] = [
    // {
    //   title: 'Test Recipe',
    //   ingredients: [
    //     {amount: 2, amountName: 'cups', name: 'parsley'},
    //     {amount: 4, amountName: 'tablespoon', name: 'flour'}
    //   ],
    //   instructions: ['Chop parsley.', 'Put parsley in bowl with flour.'],
    //   yields: {amount: 1, name: 'dozen'},
    //   nutritionFacts: [{name: 'calories', amount: 20}, {name: 'carbs', amount: 1000}],
    //   source: 'www.yomamashouse.com',
    // },
    {
      title: 'Test Recipe 2',
      ingredients: [
        {amount: 4.5, amountName: 'tsp', name: 'cinnamon'},
        {amount: 2, amountName: 'tablespoon', name: 'flour'},
        {amount: 1, amountName: 'package', name: 'chocolate chips'},
        {amount: 1.25, amountName: 'sticks', name: 'butter'}
      ],
      instructions: ['melt butter', 'mix other stuff together', 'put it all in bowl', 'blend it', 'cook it'],
      yields: {amount: 4, name: 'pounds'},
      nutritionFacts: [
        {name: 'calories', amount: 40},
        {name: 'carbs', amount: 100},
        {name: 'protein', amount: 0},
      ],
      source: 'www.therecipeplace.com',
    },
  ];
  
  return (
    <RecipeBox recipes={recipes} />
  )
}

export default App
