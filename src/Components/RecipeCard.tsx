import { useState } from 'react';
import Box from '@mui/material/Box';
import FormControl from '@mui/material/FormControl';
import MenuItem from '@mui/material/MenuItem';
import Paper from '@mui/material/Paper';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Fraction from 'fraction.js';
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
    <Paper
      elevation={14}
      sx={{
        width: '50em',
        backgroundColor: 'white',
        padding: '2em',
        margin: '2em',
      }}
    >
      <Stack
        direction='column'
        alignItems='flex-start'
        justifyContent='flex-start'
        sx={{ backgroundColor: 'white' }}
      >

        <Typography
          color='secondary'
          variant='h3'
          sx={{ textDecoration: 'underline' }}
        >
          {title}
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

        <Stack
          direction='row'
          alignItems='center'
          sx={{ paddingBottom: '1em' }}
        >
          <Box
            sx={{
              alignContent: 'center',
              borderRadius: 1,
              '&:hover': {
                bgcolor: 'primary',
              },
            }}
          >
            <FormControl fullWidth>
              <Select
                id="yield-select"
                value={amount.multiplication}
                onChange={handleChange}
              >
                <MenuItem value={0.5}>1/2x</MenuItem>
                <MenuItem value={1}>1x</MenuItem>
                <MenuItem value={2}>2x</MenuItem>
                <MenuItem value={3}>3x</MenuItem>
              </Select>
            </FormControl>
          </Box>
          <Typography
            color='secondary'
            variant='h5'
            sx={{
              paddingLeft: '1em'
            }}
          >
            {yields !== undefined ? `Yields: ${new Fraction(amount.yield).toFraction(true)} ${yields.name}` : ''}
          </Typography>
        </Stack>
        
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
            {new Fraction(i.amount).toFraction(true)} {i.amountName} {i.name}
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