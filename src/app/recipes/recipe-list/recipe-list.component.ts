import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  recipes: Recipe[] = [
    new Recipe('Banana Bread', 'this is my favorite banana bread recipe.', 'https://cdn.sallysbakingaddiction.com/wp-content/uploads/2018/10/moist-banana-bread.jpg'),
    new Recipe('Banana Bread', 'this is my favorite banana bread recipe.', 'https://cookieandkate.com/images/2015/11/healthy-honey-whole-wheat-banana-bread-2.jpg'),
    new Recipe('Banana Bread', 'this is my favorite banana bread recipe.', 'https://cookieandkate.com/images/2020/05/healthy-banana-bread-recipe-5.jpg'),
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
