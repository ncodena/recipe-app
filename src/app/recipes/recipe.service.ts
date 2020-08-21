import { EventEmitter } from '@angular/core';
import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/ingredient.model';

export class RecipeService {

    recipeSelected = new EventEmitter<Recipe>();
    private recipes: Recipe[] = [
        new Recipe(
            'Kinder Menu', 
            'super-tasty', 
            'https://makethebestofeverything.com/wp-content/uploads/2019/04/steak-and-chimicurri-loaded-french-fries.jpg',
            [
                new Ingredient('Meat', 1),
                new Ingredient('French Fries', 20)
            ]),
        new Recipe(
            'Big Delicious Burger', 
            'What else dou need?', 
            'https://www.chatelaine.com/wp-content/uploads/2012/06/Fresh-Italian-burger-0-l.jpg',
            [
                new Ingredient('Buns', 2),
                new Ingredient('Meat', 1),
                new Ingredient('Red Onions', 1),
                new Ingredient('Tomato Slices', 2)
            ])
      ];

      getRecipes() {
          return this.recipes.slice();
      }

}