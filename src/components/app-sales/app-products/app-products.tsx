import { Component } from '@stencil/core';

@Component({
  tag: 'products-item',
  styleUrl: './products-list.scss'
})
export class ProductsList {

  render() {
    return (
      <ion-card>
        {/*<img src="http://www.authenticangelsshop.com/images//mlb_jerseys_new/los_angeles_angels/angels_736.jpg"/>*/}
        <ion-card-content>
          <ion-card-title>
            Nine Inch Nails Live
          </ion-card-title>
          <p>
            The most popular industrial group ever, and largely
            responsible for bringing the music to a mass audience.
          </p>
          <ion-button href={`/sales/product/1`} slot='end' color='primary' fill='clear'>
            Detail
          </ion-button>
        </ion-card-content>
      </ion-card>
    );
  }
}
