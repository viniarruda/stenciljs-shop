import { Component } from '@stencil/core';

@Component({
  tag: 'product-detail'
})
export class ProductDetail {

  render() {
    return (
      <app-layout>
        <h1>
          DETALHE DO PRODUTO
        </h1>
      </app-layout>
    );
  }
}
