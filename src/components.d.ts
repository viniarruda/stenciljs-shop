/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
/* tslint:disable */

import '@stencil/core';

import '@ionic/core';
import 'ionicons';


import {
  Item,
} from './helpers/interfaces';


declare global {
  interface HTMLElement {
    componentOnReady?: () => Promise<this | null>;
  }

  interface HTMLStencilElement extends HTMLElement {
    componentOnReady(): Promise<this>;

    forceUpdate(): void;
  }

  interface HTMLAttributes {}

  namespace StencilComponents {

    interface AppHome {

    }

    interface AppLayout {

    }

    interface AppProfile {
      'name': string;
    }

    interface ProductsItem {
      'handleClick': any;
      'product': Item;
    }

    interface ProductDetail {
      'productId': string;
    }

    interface SalesPage {

    }

    interface MyApp {

    }
  }


    interface HTMLAppHomeElement extends StencilComponents.AppHome, HTMLStencilElement {}

    var HTMLAppHomeElement: {
      prototype: HTMLAppHomeElement;
      new (): HTMLAppHomeElement;
    };
    

    interface HTMLAppLayoutElement extends StencilComponents.AppLayout, HTMLStencilElement {}

    var HTMLAppLayoutElement: {
      prototype: HTMLAppLayoutElement;
      new (): HTMLAppLayoutElement;
    };
    

    interface HTMLAppProfileElement extends StencilComponents.AppProfile, HTMLStencilElement {}

    var HTMLAppProfileElement: {
      prototype: HTMLAppProfileElement;
      new (): HTMLAppProfileElement;
    };
    

    interface HTMLProductsItemElement extends StencilComponents.ProductsItem, HTMLStencilElement {}

    var HTMLProductsItemElement: {
      prototype: HTMLProductsItemElement;
      new (): HTMLProductsItemElement;
    };
    

    interface HTMLProductDetailElement extends StencilComponents.ProductDetail, HTMLStencilElement {}

    var HTMLProductDetailElement: {
      prototype: HTMLProductDetailElement;
      new (): HTMLProductDetailElement;
    };
    

    interface HTMLSalesPageElement extends StencilComponents.SalesPage, HTMLStencilElement {}

    var HTMLSalesPageElement: {
      prototype: HTMLSalesPageElement;
      new (): HTMLSalesPageElement;
    };
    

    interface HTMLMyAppElement extends StencilComponents.MyApp, HTMLStencilElement {}

    var HTMLMyAppElement: {
      prototype: HTMLMyAppElement;
      new (): HTMLMyAppElement;
    };
    

  namespace JSX {
    interface Element {}
    export interface IntrinsicElements {
    'app-home': JSXElements.AppHomeAttributes;
    'app-layout': JSXElements.AppLayoutAttributes;
    'app-profile': JSXElements.AppProfileAttributes;
    'products-item': JSXElements.ProductsItemAttributes;
    'product-detail': JSXElements.ProductDetailAttributes;
    'sales-page': JSXElements.SalesPageAttributes;
    'my-app': JSXElements.MyAppAttributes;
    }
  }

  namespace JSXElements {

    export interface AppHomeAttributes extends HTMLAttributes {

    }

    export interface AppLayoutAttributes extends HTMLAttributes {

    }

    export interface AppProfileAttributes extends HTMLAttributes {
      'name'?: string;
    }

    export interface ProductsItemAttributes extends HTMLAttributes {
      'handleClick'?: any;
      'product'?: Item;
    }

    export interface ProductDetailAttributes extends HTMLAttributes {
      'productId'?: string;
    }

    export interface SalesPageAttributes extends HTMLAttributes {

    }

    export interface MyAppAttributes extends HTMLAttributes {

    }
  }

  interface HTMLElementTagNameMap {
    'app-home': HTMLAppHomeElement
    'app-layout': HTMLAppLayoutElement
    'app-profile': HTMLAppProfileElement
    'products-item': HTMLProductsItemElement
    'product-detail': HTMLProductDetailElement
    'sales-page': HTMLSalesPageElement
    'my-app': HTMLMyAppElement
  }

  interface ElementTagNameMap {
    'app-home': HTMLAppHomeElement;
    'app-layout': HTMLAppLayoutElement;
    'app-profile': HTMLAppProfileElement;
    'products-item': HTMLProductsItemElement;
    'product-detail': HTMLProductDetailElement;
    'sales-page': HTMLSalesPageElement;
    'my-app': HTMLMyAppElement;
  }
}
declare global { namespace JSX { interface StencilJSX {} } }

