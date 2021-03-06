import { Component } from '@angular/core';

/**
 * This component shows a 'BUSY'(operation in progress) image & blurs the background.
 */
@Component({
    selector: 'mydeq-loading',
    template: `
  <div [ngClass]="{'modal-backdrop fade show': showLoadingSign}"></div>
  <div class="modal fade" [ngClass]="{'show': showLoadingSign}">
    <div class="mydeq-busy">
      <div class="mydeq-busy-spinner"></div>
    </div>
  </div>
  `
})
export class MyDEQLoadingComponent {

    showLoadingSign: boolean;

    constructor() { }

    showLoading() {
      this.showLoadingSign = true;
    }

    hideLoading() {
      this.showLoadingSign = false;
    }

}
