import './App.css'
import Stack from '@mui/material/Stack';
import RecipeCard from './Components/RecipeCard';

function App() {

  return (
    <Stack direction='row' justifyContent='center' sx={{ marginRight: 0 }}>
      <RecipeCard
        title='Test Recipe'
        ingredients={[[2, 'cups', 'parsley'], [4, 'tablespoon', 'flour']]}
        instructions={['Chop parsley.', 'Put parsley in bowl with flour.']}
        yields={[1, 'dozen']}
        nutritionFacts={[['calories', 20], ['carbs', 1000]]}
        source='www.yomamashouse.com'
      />
    </Stack>
  )
}

export default App
