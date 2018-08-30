import {Component, Prop, State} from '@stencil/core';
import {getProductById} from "../../../../helpers/http-service";
import {Product} from "../../../../helpers/interfaces";


@Component({
  tag: 'product-detail',
  styleUrl: 'product-details.scss'
})
export class ProductDetail {
  @Prop({ connect: 'ion-toast-controller' }) toastCtrl: HTMLIonToastControllerElement;
  @State() item: Product;
  @Prop() productId: string;

  async componentDidLoad() {
    try {
      this.getProductById();
    } catch(err) {
      console.log(err);
      this.showErrorToast();
    }
  }

  async showErrorToast() {
    const toast = await this.toastCtrl.create({ message: 'Error loading data', duration: 1000 });
    toast.present();
  }


  async getProductById() {
    this.item = await getProductById(this.productId);
    console.log('entrou', this.item);
  }

  render() {
    return (
      <app-layout>
        {
          this.item &&
            <div class="product-details">
              <div class="product-details_gallery">
                <h1>{ this.item.name }</h1>
                <div class="product-details_gallery-image">
                  <img src={this.item.largeImage} alt={this.item.name} />
                </div>
                <div class="product-details_gallery-thumbs">
                  {
                    this.item.imageEntities.map((i, key) =>
                      <div key={key} class="product-details_gallery-thumbs_item">
                        <img src={i.thumbnailImage} alt={this.item.name} />
                      </div>
                    )
                  }
                </div>
              </div>
              <div class="product-details_description">
                <h2>{ this.item.stock !== 'Not available' ? this.item.salePrice : this.item.stock}</h2>
                <p>{ this.item.shortDescription }</p>
                <ion-list>
                  <ion-item>Sku: { this.item.itemId }</ion-item>
                  <ion-item>Cor: { this.item.color }</ion-item>
                  <ion-item>Modelo: { this.item.modelNumber }</ion-item>
                  <ion-item>Fabricante: { this.item.brandName }</ion-item>
                </ion-list>
                <ion-button size="small" color="secondary">
                  <ion-icon slot="icon-only" name="cube"></ion-icon> Encomendar
                </ion-button>
                <ion-button size="small" color="primary" >Comprar</ion-button>
                <div class="back">
                  <ion-button size="small" color="secondary" href={`/sales`}>
                    Voltar
                  </ion-button>
                </div>
              </div>
            </div>
        }
      </app-layout>
    );
  }
}
