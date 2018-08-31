import { Component, Prop, State, Element, Listen } from '@stencil/core';
import { Product } from '../../helpers/interfaces';
import { getProducts, doSearch } from '../../helpers/http-service';

@Component({
  tag: 'sales-page',
  styleUrl: 'app-sales.scss'
})
export class MyComponent {

  @State() products: Product;
  @Prop({ connect: 'ion-toast-controller' }) toastCtrl: HTMLIonToastControllerElement;
  @Element() el: HTMLElement;



  async componentDidLoad() {
    console.log('FETCH', getProducts());
    this.getProducts();
  }

  async showErrorToast() {
    const toast = await this.toastCtrl.create({ message: 'Error loading data', duration: 1000 });
    toast.present();
  }

  @Listen('ionInput')
  search(ev) {
    setTimeout(async () => {
      if (ev.target.value.length > 0) {
        try {
          const searchTerm = ev.target.value;
          this.products = await doSearch(searchTerm);
        }
        catch (err) {
          this.products = await getProducts();
        }
      } else {
      }
    }, 500);
  }

  async getProducts() {
    try {
      this.products = await getProducts();
    }
    catch (err) {
      console.log(err);
      this.showErrorToast();
    }
    console.log(this.products);
  }

  navigateToDetail(productId: string) {
    (this.el.closest('ion-nav') as HTMLIonNavElement).push('product-detail', { productId });
  }

  render() {
    return (
      <app-layout>
        <ion-list class="product-list">
          {
            this.products &&
            this.products.items.map((product, key) =>
              <products-item key={key} product={product}></products-item>
            )
          }
          {console.log('html sales', this.products)}
        </ion-list>
      </app-layout>
    );
  }
}
