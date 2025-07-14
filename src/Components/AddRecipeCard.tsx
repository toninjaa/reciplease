import { useState, useContext } from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/CardActions';
import DialogContent from '@mui/material/CardContent';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import AddCircleOutlineOutlinedIcon from '@mui/icons-material/AddCircleOutlineOutlined';
import { RecipeContext } from '../Context';
import { Recipe } from '../Types/Recipe';

export default function AddRecipeCard() {
    const [open, setOpen] = useState(false);
    const [currentRecipe, setCurrentRecipe] = useState({} as Recipe)
    const recipes = useContext(RecipeContext);

    function handleAdd() {
        recipes.push(currentRecipe)
    }

    return (
        <>
            <Button
                onClick={() => setOpen(!open)}
                color='secondary'
                sx={{ marginRight: 0 }}
            >
                Add Recipe <AddCircleOutlineOutlinedIcon />
            </Button>

            <Dialog open={open}>
                <DialogContent>
                    <Typography>
                        Recipe Details
                    </Typography>
                    <TextField type='text' variant='outlined' multiline>

                    </TextField>
                </DialogContent>
                <DialogActions>
                    <Button
                        color='secondary'
                        variant='outlined'
                        onClick={() => setOpen(false)}
                    >
                        Cancel
                    </Button>
                    <Button
                        color='secondary'
                        variant='contained'
                        onClick={handleAdd}
                    >
                        Add
                    </Button>
                </DialogActions>
            </Dialog>
        </>
    )
}