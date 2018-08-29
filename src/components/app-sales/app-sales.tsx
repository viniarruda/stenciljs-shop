import { Component, Prop, State, Element } from '@stencil/core';
import { Product } from '../../helpers/interfaces';
import { getProducts } from '../../helpers/http-service';

@Component({
  tag: 'sales-page'
})
export class MyComponent {

  @State() products: Product;
  // Indicate that name should be a public property on the component
  @Prop() name: string;
  @Prop({ connect: 'ion-toast-controller' }) toastCtrl: HTMLIonToastControllerElement;
  @Element() el: Element;

  componentDidLoad() {
    console.log('FETCH', getProducts());
    this.getProducts();
  }

  async showErrorToast() {
    const toast = await this.toastCtrl.create({ message: 'Error loading data', duration: 1000 });
    toast.present();
  }

  async getProducts() {
    try {
      this.products = await getProducts();
    } catch(err) {
      this.showErrorToast();
      console.log(err);
    }
    console.log(this.products);
  }

  render() {
    return (
      <app-layout>
        <ion-infinite-scroll id="infinite-scroll">
          <ion-infinite-scroll-content
            loadingSpinner="bubbles"
            loadingText="Loading more data...">
            {
              this.products &&
              this.products.items.map((product, key) =>
                <products-item key={key} nameProduct={product.name} shortDescription={product.shortDescription}></products-item>
              )
            }
          </ion-infinite-scroll-content>
        </ion-infinite-scroll>
      </app-layout>
    );
  }
}
