import {Component, Prop} from '@stencil/core';

@Component({
  tag: 'products-item',
  styleUrl: './products-list.scss'
})
export class ProductsList {
  @Prop() nameProduct: string;
  @Prop() shortDescription: string;

  render() {
    return (
      <ion-card>
        {/*<img src="http://www.authenticangelsshop.com/images//mlb_jerseys_new/los_angeles_angels/angels_736.jpg"/>*/}
        <ion-card-content>
          <ion-card-title>
            {this.nameProduct}
          </ion-card-title>
          <p>
            {this.shortDescription}
          </p>
          <ion-button href={`/sales/product/1`} slot='end' color='primary' fill='clear'>
            Detail
          </ion-button>
        </ion-card-content>
      </ion-card>
    );
  }
}
