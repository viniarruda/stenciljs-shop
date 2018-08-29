import { Component } from '@stencil/core';

@Component({
  tag: 'app-home',
  styleUrl: 'app-home.scss'
})

export class AppHome {

  openMenuHandler() {
    console.log('fuu');
    const menu = document.querySelector('content');
    console.log(menu);
  }
  render() {
    return [
      <ion-app>
        <ion-menu contentId="content">
          <ion-header>
            <ion-toolbar>
              <ion-title>Menu</ion-title>
            </ion-toolbar>
          </ion-header>

          <ion-content>
            <ion-list>
              <div>
                <button ion-item onClick={() => this.openMenuHandler()}>
                  My Button
                </button>
              </div>  
            </ion-list>
          </ion-content>
        </ion-menu>

        <ion-router-outlet id="content"></ion-router-outlet>
      </ion-app>
    ];
  }
}
