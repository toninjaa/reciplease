import { useState } from 'react';
import Box from '@mui/material/Box';
import FormControl from '@mui/material/FormControl';
// import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Paper from '@mui/material/Paper';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { Recipe } from '../Types/Recipe';

export default function RecipeCard(props: Recipe) {
  const {
    title,
    ingredients,
    instructions,
    yields,
    nutritionFacts,
    source,
  } = props;
  const [amount, setAmount] = useState({
    multiplication: 1,
    yield: yields ? yields.amount : 1,
    updatedIngredients: ingredients,
  });

  // function multiplyIngredients(multiplier: number, ingredients: Ingredients[]) {
  //   console.log('mulitplier ingredients before: ', ingredients)
  //   return ingredients.map((x) => x.amount * multiplier)
  // }

  function handleChange(event: SelectChangeEvent<number>) {
    const multiplier = event.target.value as number;

    setAmount({
      multiplication: multiplier,
      yield: yields ? (yields.amount * multiplier) : 1,
      updatedIngredients: ingredients.map((x) => ({
        amount: x.amount * multiplier,
        amountName: x.amountName,
        name: x.name
      })),
    });
  }

  return (
    <Paper elevation={6} sx={{ backgroundColor: 'white', padding: '2em' }}>
      <Stack
        direction='column'
        alignItems='flex-start'
        justifyContent='flex-start'
        sx={{ backgroundColor: 'white' }}
      >
        <Box
          sx={{
            alignContent: 'center',
            borderRadius: 1,
            bgcolor: 'primary.main',
            '&:hover': {
              bgcolor: 'primary.dark',
            },
          }}
        >
          <FormControl fullWidth>
            {/* <InputLabel id="yield-label">Amount</InputLabel> */}
            <Select
              labelId="yield-select-label"
              id="yield-select"
              value={amount.multiplication}
              label="Yield"
              onChange={handleChange}
            >
              <MenuItem value={1}>1x</MenuItem>
              <MenuItem value={2}>2x</MenuItem>
              <MenuItem value={3}>3x</MenuItem>
            </Select>
          </FormControl>
        </Box>
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
          {yields !== undefined ? `Yields: ${amount.yield} ${yields.name}` : ''}
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
        
        {amount.updatedIngredients.length > 0 && amount.updatedIngredients.map((i) => (
          <Typography
            key={i.name}
            color='secondary'
            sx={{ textTransform: 'capitalize', marginBottom: '.25em' }}
          >
            {i.amount} {i.amountName} {i.name}
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
            key={i}
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
            key={nf.name}
            color='secondary'
            variant='body2'
            sx={{ textTransform: 'capitalize' }}
          >
            {nf.name}: {nf.amount}
          </Typography>
        ))}

      </Stack>
    </Paper>
  )
}