import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ClientGestionStockProduit';
  showHideSidebar: boolean = false ;
  onShowSidebarChange(showHideSidebar){
    this.showHideSidebar = showHideSidebar;
  }
}
