import { Component } from '@stencil/core';

@Component({
  tag: 'app-layout'
})

export class AppLayout {
  render() {
    return (
      <div>
        <ion-header md-height="96px">
          <ion-toolbar color="primary">
            <ion-button slot="start">
              <ion-icon slot="icon-only" name="menu"></ion-icon>
            </ion-button>
            <ion-title>Secondary Toolbar</ion-title>
            <ion-buttons slot="end">
              <ion-button>
                <ion-badge color="medium">0</ion-badge>
                <ion-icon slot="icon-only" name="notifications">
                </ion-icon>
              </ion-button>
              <ion-button>
                <ion-icon slot="icon-only" name="cart">
                </ion-icon>
              </ion-button>
              <ion-button>
                <ion-icon slot="icon-only" name="contact"></ion-icon>
              </ion-button>
              <ion-button>
                <ion-icon slot="icon-only" name="more"></ion-icon>
              </ion-button>
            </ion-buttons>
          </ion-toolbar>

        </ion-header>
        <div>
          <slot />
        </div>
      </div>
    )
  }
}
