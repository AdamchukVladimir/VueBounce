Vue.component('product', {
  props:{
    premium: {
      type: Boolean,
      required: true
    }
  },
  template: `
    <div class="product">
      <div class="product-image">
        <img :src="image" />
      </div>

      <div class="product-info">
        <h1>{{ title }}</h1>
        <p v-if="inStock">In stock</p>
        <p v-else>Out of Stock</p>
        <p>User is premium {{ premium }}</p>
        <p>Shipping: {{ shipping }}</p>

        
        <product-details :details="details"></product-details>
        
        <div
          class="color-box"
          v-for="(variant, index) in variants"
          :key="variant.variantId"
          :style="{ backgroundColor: variant.variantColor }"
          @mouseover="updateProduct(index)"
        ></div>

        <button
          v-on:click="addToCart"
          :disabled="!inStock"
          :class="{ disabledButton: !inStock }"
        >
          Add to cart
        </button>

        <button
          v-on:click="removeFromCart"
          :disabled="!inStock"
          :class="{ disabledButton: !inStock }"
        >
          Remove from cart
        </button>  

      </div>
    </div>
`,
  data() {
    return {
      product: 'Socks',
      brand: 'Vue Mastery',
      selectedVariant: 0,
      details: ['80% cotton', '20% polyester', 'Gender-neutral'],
      variants: [
        {
          variantId: 2234,
          variantColor: 'green',
          variantImage: './assets/vmSocks-green-onWhite.jpg',
          variantQuantity: 10
        },
        {
          variantId: 2235,
          variantColor: 'blue',
          variantImage: './assets/vmSocks-blue.png',
          variantQuantity: 0
        }
      ],
      
    }
  },
  methods: {
    addToCart() {
      this.$emit('add-to-cart', this.variants[this.selectedVariant].variantId)
    },
    removeFromCart(){
      this.$emit('remove-from-cart', this.variants[this.selectedVariant].variantId)
    },
    updateProduct(index) {
      this.selectedVariant = index;
      console.log(index);
    }
  },
  computed: {
    title() {
      return this.brand + ' ' + this.product;
    },
    image() {
      return this.variants[this.selectedVariant].variantImage;
    },
    inStock(){
      return this.variants[this.selectedVariant].variantQuantity;
    },
    shipping() {
      if (this.premium){
         return "Free";
      }
      else {
        return 2.99
      }   
    }
  }
})

var app = new Vue({
  el: '#app',
  data: {
    premium: true,
    cart: []
  },
  methods: {
    updateCart(id){
      this.cart.push(id)
    },
    removeFromCart(id){
      if (this.cart.indexOf(id) > -1){
        this.cart.splice(this.cart.indexOf(id), 1);
      }
        
    }

  }
})

