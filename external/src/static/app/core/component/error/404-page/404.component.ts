import { Component } from '@angular/core';


@Component({
  selector: 'page-not-found',
  templateUrl: './404.component.html'
})
/**
 * Page not found component. 
 */
export class PageNotFoundComponent {

  constructor() {
    
   }

  goBack(){
     window.location.href=window.location.origin+"/mydeq/dashboard";
  }

}
