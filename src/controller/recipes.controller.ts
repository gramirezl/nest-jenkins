import { Body, Controller, Get, Param, Post, Query } from '@nestjs/common';
import { User } from 'src/user';
import { Recipe } from './../entities/recipes';
import { RecipesService } from './../services/recipes.service';
import { ParseIntPipe } from './../common/parse-int/parse-int.pipe';

@Controller('recipes')
export class RecipesController {
  constructor(private readonly recipesService: RecipesService) {}

  @Get('')
  getRecipes() {
    return this.recipesService.getRecipes();
  }

  @Get(':id')
  getRecipesById(@Param('id', ParseIntPipe) id: number) {
    return this.recipesService.getRecipeById(id);
  }

  @Post()
  SaveRecipe(@Body() recipe: Recipe) {
    this.recipesService.createRecipe(recipe);
    return `Recipe ${recipe.name} saved`;
  }

  @Get('/default/user/data')
  getDefault(@Query('age') age = 50, @Query('name') name = 'Gustavo') {
    return `You are ${age} years old and your name is ${name}`;
  }

  @Post('user')
  SaveUser(@Body() user: User) {
    return `User: ${user.name}, Age: ${user.age} saved`;
  }
}
