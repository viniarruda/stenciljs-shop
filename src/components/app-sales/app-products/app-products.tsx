import {Component, Prop, Element, EventEmitter} from '@stencil/core';
import {Item} from "../../../helpers/interfaces";

@Component({
  tag: 'products-item',
  styleUrl: 'app-products.scss'
})
export class ProductsList {
  @Prop() product: Item;
  @Prop() handleClick;
  @Element() el: HTMLElement;
  @Prop({ context: 'emit' }) private Emitter : EventEmitter;

  emitterHandler(item: Item) {
    this.Emitter.emit(item);
  }

  navigateToDetail(productId: string) {
    (this.el.closest('ion-nav') as HTMLIonNavElement).push('product-detail', { productId });
  }

  render() {
    return (
      <ion-item>
        <ion-card>
          <img src={this.product.mediumImage}/>
          <ion-card-content>
            <ion-card-title>
              {this.product.name}
            </ion-card-title>
            <p>
              {this.product.shortDescription}
            </p>
            <span>
              R${this.product.salePrice}
            </span>
            <ion-button href={`/sales/product/${this.product.itemId}`} slot='end' color='primary' fill='clear' onClick={this.handleClick}>
              Detail
            </ion-button>
          </ion-card-content>
        </ion-card>
      </ion-item>
    );
  }
}
