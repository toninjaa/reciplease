import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import Typography from "@mui/material/Typography";

export type Recipe = {
  title: string,
  ingredients: [number, string, string][],
  instructions: string[],
  yields?: [number, string],
  nutritionFacts?: [string, number][],
  source?: string,
}

export default function RecipeCard(props: Recipe) {
  const {
    title,
    ingredients,
    instructions,
    yields,
    nutritionFacts,
    source,
  } = props;

  return (
    <Paper elevation={6} sx={{ backgroundColor: 'white', padding: '2em' }}>
      <Stack
        direction='column'
        alignItems='flex-start'
        justifyContent='flex-start'
        sx={{ backgroundColor: 'white' }}
      >
        <Typography
          color='secondary'
          variant='h3'
          sx={{ textDecoration: 'underline', marginBottom: '.25em' }}
        >
          {title}
        </Typography>
        
        <Typography
          color='secondary'
          variant='subtitle2'
        >
          {yields !== undefined ? `Yields: ${yields[0]} ${yields[1]}` : ''}
        </Typography>
        
        {source !== undefined &&
          <Typography
            color='secondary'
            variant='subtitle2'
            sx={{ marginBottom: '1em' }}
          >
            Source: <a href={source} target='_blank'>{source}</a>
          </Typography>
        }
        
        <Typography
          color='secondary'
          variant='h5'
          sx={{ textDecoration: 'underline' }}
        >
          Ingredients
        </Typography>
        
        {ingredients.length > 0 && ingredients.map((i) => (
          <Typography
            color='secondary'
            sx={{ textTransform: 'capitalize', marginBottom: '.25em' }}
          >
            {i[0]} {i[1]} {i[2]}
          </Typography>
        ))}
        
        <Typography
          color='secondary'
          variant='h5'
          sx={{ textDecoration: 'underline', marginTop: '.75em' }}>
            Instructions
        </Typography>
        
        {instructions.length > 0 && instructions.map((instruct, i) => (
          <Typography
            color='secondary'
            sx={{ marginBottom: '.25em' }}
          >
            {i+1}. {instruct}
          </Typography>
        ))}

        <Typography
          color='secondary'
          variant='h6'
          sx={{ textDecoration: 'underline', marginTop: '.75em' }}
        >
          Nutrition Facts
        </Typography>
        
        {nutritionFacts !== undefined && nutritionFacts.length > 0 && nutritionFacts?.map((nf) => (
          <Typography
            color='secondary'
            variant='body2'
            sx={{ textTransform: 'capitalize' }}
          >
            {nf[0]}: {nf[1]}
          </Typography>
        ))}

      </Stack>
    </Paper>
  )
}