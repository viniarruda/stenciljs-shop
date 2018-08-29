import { Component, Prop } from '@stencil/core';

@Component({
  tag: 'sales-page'
})
export class MyComponent {

  // Indicate that name should be a public property on the component
  @Prop() name: string;

  render() {
    return (
      <app-layout>
        <div class="sales-list">
          <products-item></products-item>
        </div>
      </app-layout>
    );
  }
}
