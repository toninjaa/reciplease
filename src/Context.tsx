import { createContext } from 'react';
import { Recipe } from './Types/Recipe';

export const RecipeContext = createContext([] as Recipe[]);