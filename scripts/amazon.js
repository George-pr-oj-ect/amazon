//save the data


//use data to generate html
//takes each object saves it in the parameter called product and runs the function
import { products, loadProducts } from '../data/products.js'
import { cart, addToCart, calculateCartQuantity } from '../data/cart.js';
import { formatCurrency } from './utils/money.js';

loadProducts(renderProductsGrid);

function renderProductsGrid() {

  let productsHTML = ''

  const url = new URL(window.location.href);
  const search = url.searchParams.get('search');

  let filteredProducts = products;

  if (search) {
    filteredProducts = products.filter((product) => {
      let matchingKeyword = false;

      product.keywords.forEach((keyword) => {
        if (keyword.toLowerCase().includes(search.toLowerCase())) {
          matchingKeyword = true;
        }
      });
      return matchingKeyword ||
        product.name.toLowerCase().includes(search.toLocaleLowerCase());
    });
  }

  filteredProducts.forEach((products) => {
    productsHTML += `
    <div class="product-container">
          <div class="product-image-container">
            <img class="product-image" src="${products.image}">
          </div>

          <div class="product-name limit-text-to-2-lines"> 
          ${products.name}
          </div>

          <div class="product-rating-container">
            <img class="product-rating-stars" src="${products.getStarsUrl()}">
            <div class="product-rating-count link-primary">
              ${products.rating.count}
            </div>
          </div>

          <div class="product-price">
            ${products.getPrice()}
          </div>

          <div class="product-quantity-container">
            <select class="js-quantity-selector-${products.id}">
              <option selected value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
              <option value="7">7</option>
              <option value="8">8</option>
              <option value="9">9</option>
              <option value="10">10</option>
            </select>
          </div>

          ${products.extraInfoHTML()}
      
          <div class="product-spacer"></div>

          <div class="added-to-cart js-added-to-cart-${products.id}">
            <img src="images/icons/checkmark.png">
            Added
          </div>

          <button class="add-to-cart-button button-primary js-add-to-cart"
          data-product-id="${products.id}">
            Add to Cart
          </button>
        </div>`;

  })
  //put it on the page using the DOM
  document.querySelector('.js-products-grid').innerHTML = productsHTML




  function updateCartQuantity() {

    const cartQuantity = calculateCartQuantity()

    document.querySelector('.js-cart-quantity').innerHTML = ` ${cartQuantity
      } `
  }

  updateCartQuantity()
  //make it interactive
  document.querySelectorAll('.js-add-to-cart').forEach((button) => {
    button.addEventListener('click', () => {
      const productId = button.dataset.productId//or {productId}=button.dataset;
      addToCart(productId)
      updateCartQuantity()


      const addedMessage = document.querySelector(`.js-added-to-cart-${productId}`)
      addedMessage.classList.add('added-to-cart-visible')

      setTimeout(() => {
        addedMessage.classList.remove('added-to-cart-visible')
      }, 2000)
    })


  });


  document.querySelector('.js-search-button').addEventListener('click', () => {
    const search = document.querySelector('.js-search-bar').value;
    window.location.href = `amazon.html?search = ${search}`;
  });

};
