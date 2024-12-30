import Stack from '@mui/material/Stack';
import Typography from "@mui/material/Typography";

interface Props {
  title: string,
  ingredients: [number, string, string][],
  instructions: string[],
  yields?: [number, string],
  nutritionFacts?: [string, number][],
  source?: string,
}

export default function RecipeCard(props: Props) {
  const {
    title,
    ingredients,
    instructions,
    yields,
    nutritionFacts,
    source,
  } = props;

  return (
    <Stack direction='column' alignItems='flex-start' justifyContent='flex-start'>
      <Typography color='secondary' variant='h3'>{title}</Typography>
      <Typography color='secondary' variant='subtitle2'>{yields !== undefined ? `Yields: ${yields[0]} ${yields[1]}` : ''}</Typography>
      
      {source !== undefined && <Typography color='secondary'>Source: {source}</Typography>}
      
      <Typography color='secondary' variant='h5'>Ingredients</Typography>
      {ingredients.length > 0 && ingredients.map((i) => (
        <Typography color='secondary'>{i[0]} {i[1]} {i[2]}</Typography>
      ))}
      
      <Typography color='secondary' variant='h5'>Instructions</Typography>
      {instructions.length > 0 && instructions.map((instruct, i) => (
        <Typography color='secondary'>{i+1}. {instruct}</Typography>
      ))}

      <Typography color='secondary' variant='h5'>Nutrition Facts</Typography>
      {nutritionFacts !== undefined && nutritionFacts.length > 0 && nutritionFacts?.map((nf) => (
        <Typography color='secondary'>{nf[0]}: {nf[1]}</Typography>
      ))}

    </Stack>
  )
}