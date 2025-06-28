import { renderOrderSummary } from './checkout/orderSummary.js';
import { renderPaymentSummary } from './checkout/paymentSummary.js';
import { renderCheckoutHeader } from './checkout/checkoutHeader.js';
import { loadProducts, loadProductsFetch } from '../data/products.js';
import { loadCartFetch, loadCart } from '../data/cart.js';
//import '../data/cart-class.js';
//import '../data/backend-practice.js'

async function loadPage() {
  try {
    // throw 'error1';

    await Promise.all([
      loadProductsFetch(),
      loadCartFetch()
    ])

    const value = await new Promise((resolve, reject) => {
      // throw 'error2'
      loadCart(() => {
        //reject('error 3')
        resolve('value3');
      })
    })
    await loadCartFetch()

  } catch (error) {
    console.log('unexpected error try again')
  }

  renderCheckoutHeader()
  renderOrderSummary();
  renderPaymentSummary();
};

loadPage();


/*

Promise.all([
  loadProductsFetch(),
  new Promise((resolve) => {
    loadCart(() => {
      resolve();
    })
  })

]).then(() => {
  renderCheckoutHeader()
  renderOrderSummary();
  renderPaymentSummary();
});
*/

/*
new Promise((resolve) => {
  loadProducts(() => {
    resolve('value 1');
  });
}).then((value) => {
  console.log(value)

  return new Promise((resolve) => {
    loadCart(() => {
      resolve();
    })
  })
}).then(() => {
  renderCheckoutHeader()
  renderOrderSummary();
  renderPaymentSummary();
});


/*
loadProducts(() => {
  loadCart(() => {
    renderCheckoutHeader()
    renderOrderSummary();
    renderPaymentSummary();
  });
});
*/



