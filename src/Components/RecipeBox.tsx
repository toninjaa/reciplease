import { Recipe } from './RecipeCard';
import RecipeCard from './RecipeCard';
import Stack from '@mui/material/Stack';

interface Props {
  recipes: Recipe[],
}

export default function RecipeBox(props: Props) {
  const { recipes } = props;

  return (
    <Stack direction='row' justifyContent='center' sx={{ marginRight: 0 }}>
      {recipes.map((p: Recipe) => (
        <RecipeCard
          title={p.title}
          ingredients={p.ingredients}
          instructions={p.instructions}
          yields={p.yields}
          nutritionFacts={p.nutritionFacts}
          source={p.source}
        />
      ))}
    </Stack>
  )
}