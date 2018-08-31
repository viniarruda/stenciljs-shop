// import { setupConfig } from '@ionic/core';

// setupConfig({
//   mode: 'ios'
// });

import cartService from './cartService';

declare var Context: any;

Context.globalVar = '';
Context.cartService = cartService;
