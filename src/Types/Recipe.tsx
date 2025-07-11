export type Ingredients = {
    amount: number,
    amountName: string,
    name: string,
}

export type Yield = {
    amount: number,
    name: string,
}
 export type NutritionFacts = {
    name: string,
    amount: number,
 }

export type Recipe = {
  title: string,
  ingredients: Ingredients[],
  instructions: string[],
  yields?: Yield,
  nutritionFacts?: NutritionFacts[],
  source?: string,
}
