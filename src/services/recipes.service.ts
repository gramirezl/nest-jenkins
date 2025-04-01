import { Injectable, NotFoundException } from '@nestjs/common';
import { Recipe } from 'src/entities/recipes';

@Injectable()
export class RecipesService {
  private recipes: Array<Recipe> = [
    {
      id: 1,
      name: 'Pizza',
      ingredients: ['tomato', 'cheese', 'flour', 'water'],
      description: 'This is a pizza',
    },
    {
      id: 2,
      name: 'Hamburger',
      ingredients: ['tomato', 'cheese', 'flour', 'water'],
      description: 'This is a hamburger',
    },
  ];

  getRecipes(): Array<Recipe> {
    return this.recipes;
  }

  getRecipeById(id: number) {
    const product = this.recipes.find((recipe) => recipe.id == id);

    if (!product) {
      throw new NotFoundException('Recipe not found');
    }

    return product;
  }

  createRecipe(recipe: Recipe) {
    this.recipes.push(recipe);
  }
}
