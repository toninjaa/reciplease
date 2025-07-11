import './App.css'
import { Recipe } from './Types/Recipe';
import RecipeBox from './Components/RecipeBox';

function App() {
  const recipes: Recipe[] = [
    {
      title: 'Test Recipe',
      ingredients: [
        {amount: 2, amountName: 'cups', name: 'parsley'},
        {amount: 4, amountName: 'tablespoon', name: 'flour'}
      ],
      instructions: ['Chop parsley.', 'Put parsley in bowl with flour.'],
      yields: {amount: 1, name: 'dozen'},
      nutritionFacts: [{name: 'calories', amount: 20}, {name: 'carbs', amount: 1000}],
      source: 'www.yomamashouse.com',
    },
    // {
    //   title: 'Test Recipe 2',
    //   ingredients: [[4.5, 'tsp', 'cinnamon'], [2, 'tablespoon', 'flour'], [1, 'package', 'chocolate chips'], [1.25, 'sticks', 'butter']],
    //   instructions: ['melt butter', 'mix other stuff together', 'put it all in bowl', 'blend it', 'cook it'],
    //   yields: [4, 'pounds'],
    //   nutritionFacts: [['calories', 40], ['carbs', 100], ['protein', 0]],
    //   source: 'www.therecipeplace.com',
    // },
  ];
  
  return (
    <RecipeBox recipes={recipes} />
  )
}

export default App
