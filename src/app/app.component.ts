import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'courseProject';
  loadedFeature: string = "";
  recipes: string = "recipe";
  shoppingList: string = "shopping-list";
}
